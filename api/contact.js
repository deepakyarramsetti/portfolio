import cors from 'cors';
import nodemailer from 'nodemailer';

const corsHandler = cors({ origin: true });

async function runCors(req, res) {
    return new Promise((resolve, reject) => {
        corsHandler(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    // Enable CORS
    try {
        await runCors(req, res);
    } catch (err) {
        return res.status(500).json({ error: 'CORS error' });
    }

    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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
        // Debug: Check if env vars are set
        console.log('Environment variables check:');
        console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✓ Set' : '✗ Missing');
        console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? '✓ Set' : '✗ Missing');
        console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL ? '✓ Set' : '✗ Missing');

        if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
            throw new Error('Gmail credentials are not configured. Add GMAIL_USER and GMAIL_PASS to Vercel environment variables.');
        }

        // Create email transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Send email to your inbox
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_EMAIL,
            subject: `🎉 New Message from ${name} - Portfolio Contact Form`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-box { background: #f0f4ff; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0; border-radius: 4px; }
            .info-label { font-weight: bold; color: #667eea; font-size: 12px; text-transform: uppercase; }
            .info-value { color: #333; margin-top: 5px; font-size: 16px; }
            .message-box { background: #f9f9f9; border: 1px solid #ddd; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .message-text { white-space: pre-wrap; word-wrap: break-word; color: #555; }
            .footer { text-align: center; padding: 20px; border-top: 1px solid #ddd; margin-top: 20px; font-size: 12px; color: #999; }
            .button { display: inline-block; background: #667eea; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin-top: 10px; }
            .timestamp { font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>👤 Someone Viewed Your Portfolio!</h1>
              <p>They left you a message</p>
            </div>
            
            <div class="content">
              <p>Hello Deepak,</p>
              <p>Great news! Someone visited your portfolio and decided to reach out to you. Here are their details:</p>
              
              <div class="info-box">
                <div class="info-label">👤 Visitor Name</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-box">
                <div class="info-label">📧 Email Address</div>
                <div class="info-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="info-box">
                <div class="info-label">📅 Submitted On</div>
                <div class="info-value">${new Date().toLocaleString()}</div>
              </div>
              
              <div style="margin: 25px 0;">
                <p style="font-weight: bold; color: #333; margin-bottom: 10px;">💬 Their Message:</p>
                <div class="message-box">
                  <div class="message-text">${name} says:</div>
                  <div class="message-text" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <p style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 4px; margin: 20px 0;">
                <strong>💡 Quick Action:</strong> Reply directly to this email or <a href="mailto:${email}">click here to compose an email</a> to ${name}.
              </p>
              
              <p style="font-size: 12px; color: #999; margin-top: 25px; text-align: center;">
                This message was sent from your portfolio website contact form.
              </p>
            </div>
            
            <div class="footer">
              <p>Your Portfolio Contact System | Powered by Your Website</p>
            </div>
          </div>
        </body>
        </html>
      `,
            replyTo: email,
        });

        console.log('✅ Email sent successfully to', process.env.CONTACT_EMAIL);
        return res.status(201).json({ ok: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('Failed to send email:', err.message);
        return res.status(500).json({ error: 'Failed to send message: ' + err.message });
    }
}
