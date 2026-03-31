import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Redirect old hosting URLs to homepage
app.get('/cgi-sys/*path', (req, res) => res.redirect(301, '/'));
app.get('/ru', (req, res) => res.redirect(301, '/'));
app.get('/ru/*path', (req, res) => res.redirect(301, '/'));

app.use(express.static(join(__dirname, 'dist')));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

let lastSubmissions = {};

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const now = Date.now();
    if (lastSubmissions[email] && now - lastSubmissions[email] < 60000) {
      return res.status(429).json({ error: 'Please wait before submitting again.' });
    }
    lastSubmissions[email] = now;

    const serviceLabels = {
      'casino-agg': 'Casino Aggregator',
      'sportsbook-agg': 'Sportsbook Aggregator',
      'white-label': 'White Label Platform',
      'crypto': 'Crypto Casino',
      'curacao': 'Curacao License',
      'anjouan': 'Anjouan License',
      'multiple': 'Multiple Services',
    };

    const serviceName = serviceLabels[service] || service || 'Not specified';

    await transporter.sendMail({
      from: `"MATGAMING Website" <${process.env.SMTP_USER || 'info@matgaming.net'}>`,
      to: 'info@matgaming.net',
      replyTo: email,
      subject: `New Inquiry from ${name} — ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6366f1; padding: 20px 30px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #1e293b; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 10px 0; color: #1e293b;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Service</td>
                <td style="padding: 10px 0; color: #1e293b;">${serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #1e293b; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 16px; text-align: center;">
            Sent from matgaming.com contact form
          </p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.get('/{*path}', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
