
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!emailOk) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!trimmedMessage) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      });

      const data: unknown = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errMsg =
          typeof (data as { error?: unknown })?.error === 'string'
            ? (data as { error: string }).error
            : 'Failed to send message. Please try again.';
        setStatus({ type: 'error', message: errMsg });
        return;
      }

      setStatus({ type: 'success', message: "Thanks! Your message has been sent successfully." });
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Let's Work Together</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium">
          I'm currently available for freelance work and new opportunities. Whether you have a project idea or just want to chat, feel free to reach out!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass-navbar border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Me</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass-navbar border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call Me</p>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass-navbar border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-3 glass-navbar border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 ml-1 uppercase">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-slate-900 dark:text-white font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 ml-1 uppercase">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-slate-900 dark:text-white font-medium"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 ml-1 uppercase">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all resize-none text-slate-900 dark:text-white font-medium"
            ></textarea>
          </div>

          {status && (
            <div
              className={`px-4 py-3 rounded-xl text-sm font-bold border ${status.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-300'
                }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:-translate-y-1 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed hover:-translate-y-0 active:scale-100' : ''
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
