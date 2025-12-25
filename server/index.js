import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import pg from 'pg';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config({ path: '.env.local' });
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

const app = express();

app.use(cors({ origin: true }));
app.use(express.json({ limit: '200kb' }));

app.use((req, res, next) => {
    if (!req.path.startsWith('/api/')) return next();

    const startedAt = Date.now();
    res.on('finish', () => {
        const durationMs = Date.now() - startedAt;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs}ms`);
    });

    next();
});

app.get('/api/health', async (_req, res) => {
    try {
        await pool.query('select 1 as ok');
        res.json({ ok: true });
    } catch (err) {
        console.error('GET /api/health failed:', err);
        res.status(500).json({ ok: false });
    }
});

app.post('/api/contact', async (req, res) => {
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';
    const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';

    console.log('POST /api/contact payload:', {
        nameLength: name.length,
        emailProvided: Boolean(email),
        messageLength: message.length,
    });

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (name.length > 120) return res.status(400).json({ error: 'Name is too long' });
    if (!emailOk) return res.status(400).json({ error: 'Valid email is required' });
    if (!message) return res.status(400).json({ error: 'Message is required' });
    if (message.length > 5000) return res.status(400).json({ error: 'Message is too long' });

    try {
        const result = await pool.query(
            'insert into contact_messages (name, email, message) values ($1, $2, $3) returning id, created_at',
            [name, email, message]
        );

        const row = result.rows?.[0];
        return res.status(201).json({ ok: true, id: row?.id, createdAt: row?.created_at });
    } catch (err) {
        console.error('POST /api/contact failed:', err);
        return res.status(500).json({ error: 'Failed to store message' });
    }
});

const distPath = path.resolve(__dirname, '../dist');

if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api/')) return next();
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

const port = Number(process.env.PORT) || 3001;

async function ensureSchema() {
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    if (!fs.existsSync(schemaPath)) return;
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    if (!schemaSql.trim()) return;
    await pool.query(schemaSql);
}

async function start() {
    try {
        await ensureSchema();
    } catch (err) {
        console.error('Failed to apply DB schema:', err);
    }

    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}

start();
