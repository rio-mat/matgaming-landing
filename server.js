import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const indexHtml = readFileSync(join(__dirname, 'dist', 'index.html'), 'utf-8');

// Per-route SEO meta data
const pageMeta = {
  '/': {
    title: 'MATGAMING - B2B iGaming Platform & Casino Slot Aggregator',
    description: 'MATGAMING - B2B iGaming technology provider. Casino aggregator, sportsbook aggregator, white label platform, crypto casino and iGaming licensing. 10,000+ games from 200+ providers.',
  },
  '/casino-aggregator': {
    title: 'Casino Aggregator - 10,000+ Games, 200+ Providers | MATGAMING',
    description: 'Access 10,000+ casino games from 200+ providers through a single API. Slots, live casino, table games, crash games from Pragmatic Play, Evolution, NetEnt and more.',
  },
  '/sportsbook-aggregator': {
    title: 'Sportsbook Aggregator - BetConstruct, Digitain, Betradar | MATGAMING',
    description: 'BetConstruct, Digitain and Betradar sportsbook integration. Pre-match and live betting on 50+ sports, thousands of markets from leading providers.',
  },
  '/white-label': {
    title: 'White Label Casino Platform - Launch in Weeks | MATGAMING',
    description: 'Launch your online casino in weeks with our turnkey White Label platform. Complete backoffice, bonus engine, 100+ payment methods and 10,000+ games included.',
  },
  '/crypto-casino': {
    title: 'Crypto Casino Platform - Bitcoin, Ethereum, 50+ Coins | MATGAMING',
    description: 'Native cryptocurrency casino platform. Accept Bitcoin, Ethereum, USDT and 50+ coins with instant transactions, cold storage security and full backoffice.',
  },
  '/curacao-license': {
    title: 'Curacao Gaming License - Orange & Green in 6-8 Weeks | MATGAMING',
    description: 'Fast-track Curacao gaming license. Orange and Green licenses processed in 6-8 weeks with full legal documentation and compliance support.',
  },
  '/anjouan-license': {
    title: 'Anjouan Gaming License - Master & Sub in 4-6 Weeks | MATGAMING',
    description: 'Anjouan iGaming license — master and sub-license in 4-6 weeks. Fastest processing times, competitive costs and full regulatory support.',
  },
  '/about': {
    title: 'About MATGAMING - B2B iGaming Technology Provider',
    description: 'MATGAMING is a B2B iGaming technology provider delivering casino aggregation, sportsbook solutions, white label platforms, crypto casino infrastructure and licensing services.',
  },
  '/blog': {
    title: 'Blog & Insights - iGaming Industry Knowledge | MATGAMING',
    description: 'iGaming industry insights, product guides, event coverage and expert analysis. Learn about casino aggregation, licensing, crypto casinos and operator strategies.',
  },
  '/contact': {
    title: 'Contact MATGAMING - Get a Quote for iGaming Solutions',
    description: 'Get in touch with MATGAMING for casino aggregation, sportsbook integration, white label platform, crypto casino or licensing services. We respond within 24 hours.',
  },
};

function renderPage(path) {
  const meta = pageMeta[path] || pageMeta['/'];
  let html = indexHtml;
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${meta.description}">`
  );
  // Add canonical
  const canonical = `https://matgaming.net${path === '/' ? '' : path}`;
  html = html.replace(
    /<link rel="canonical".*?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  // Update OG tags
  html = html.replace(
    /<meta property="og:title".*?>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta property="og:description".*?>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = html.replace(
    /<meta property="og:url".*?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  return html;
}

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
          <div style="background: #ea580c; padding: 20px 30px; border-radius: 8px 8px 0 0;">
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
                <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
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
            Sent from matgaming.net contact form
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

// SPA fallback with per-route SEO meta tags
app.get('/{*path}', (req, res) => {
  const path = req.path.replace(/\/$/, '') || '/';
  res.send(renderPage(path));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
