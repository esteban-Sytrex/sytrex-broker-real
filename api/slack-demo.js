/**
 * Vercel serverless proxy for Slack Incoming Webhook.
 * Avoids CORS by posting to Slack from the server.
 *
 * Set SLACK_WEBHOOK_URL in Vercel project Environment Variables.
 * Frontend should use VITE_SLACK_API_URL=https://your-app.vercel.app/api/slack-demo
 */

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

function buildSlackPayload(data) {
  return {
    text: 'New demo registration',
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: 'Mga-page – New Demo Registration', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Full Name:*\n${data.fullName || '—'}` },
          { type: 'mrkdwn', text: `*Email:*\n${data.email || '—'}` },
          { type: 'mrkdwn', text: `*Phone:*\n${data.phone || '—'}` },
          { type: 'mrkdwn', text: `*Company:*\n${data.company || '—'}` },
          { type: 'mrkdwn', text: `*Job Title:*\n${data.jobTitle || '—'}` },
        ],
      },
    ],
  }
}

export default async function handler(req, res) {
  const origin = req.headers.origin

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!SLACK_WEBHOOK_URL) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    return res.status(500).json({ error: 'Slack webhook not configured' })
  }

  try {
    const body = typeof req.body === 'object' ? req.body : {}
    const payload = buildSlackPayload(body)
    const slackRes = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!slackRes.ok) {
      throw new Error(`Slack responded with ${slackRes.status}`)
    }
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    return res.status(200).json({ ok: true })
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
    return res.status(500).json({ error: err.message || 'Failed to send to Slack' })
  }
}
