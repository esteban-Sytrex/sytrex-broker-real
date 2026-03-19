import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

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

function slackProxyPlugin(webhookUrl) {
  return {
    name: 'slack-proxy',
    configureServer(server) {
      server.middlewares.use('/api/slack-demo', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

        if (req.method === 'OPTIONS') {
          res.writeHead(204)
          return res.end()
        }

        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          return res.end(JSON.stringify({ error: 'Method not allowed' }))
        }

        if (!webhookUrl) {
          console.warn('[slack-proxy] SLACK_WEBHOOK_URL is not set in .env')
          res.writeHead(500, { 'Content-Type': 'application/json' })
          return res.end(JSON.stringify({ error: 'SLACK_WEBHOOK_URL not configured' }))
        }

        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', async () => {
          try {
            const raw = Buffer.concat(chunks).toString()
            const body = raw ? JSON.parse(raw) : {}
            const payload = buildSlackPayload(body)
            const slackRes = await fetch(webhookUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            })
            res.writeHead(slackRes.ok ? 200 : 500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ ok: slackRes.ok }))
          } catch (err) {
            console.error('[slack-proxy] Error:', err.message)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: err.message }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), slackProxyPlugin(env.SLACK_WEBHOOK_URL)],
  }
})
