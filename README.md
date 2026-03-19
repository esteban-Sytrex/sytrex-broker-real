# Sytrex – MGA & MGU Landing

Landing page for **Sytrex** targeting **MGAs & MGUs** (Managing General Agents & Managing General Underwriters). It highlights how underwriting teams can reduce manual work and close deals faster, with a demo registration flow and an embedded video.

## Features

- **Long-scroll landing**: Hero, benefits, walkthrough, audience and fit sections, and CTA
- **Header & footer**: Global navigation with Sytrex logo and Book a Demo
- **Demo modal**: “Watch the Free Demo” opens a registration form (full name, email, phone, company, job title); on success, redirects to the demo page
- **Demo page**: Dedicated route with Loom video embed and “Book Strategy Call” CTA
- **Form API**: Optional `VITE_FORM_SUBMIT_URL` to POST form data to your backend
- **Slack**: Optional proxy API (`VITE_SLACK_API_URL`) to post new demo registrations to a Slack channel (avoids CORS)

## Prerequisites

- **Node.js** 18+ (or 20+ recommended)

## Setup

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env` and set:

| Variable | Description |
|----------|-------------|
| `VITE_FORM_SUBMIT_URL` | (Optional) API URL for POSTing the demo registration form. Request body: `{ fullName, email, phone, company, jobTitle }`. If unset, form still validates and redirects to the demo page. |
| `VITE_SLACK_API_URL` | (Optional) URL of the Slack proxy API (e.g. `https://your-app.vercel.app/api/slack-demo`). Use this to avoid CORS: deploy to Vercel, set `SLACK_WEBHOOK_URL` in Vercel env, then set this to your `/api/slack-demo` URL. |
| `VITE_LOOM_EMBED_URL` | (Optional) Loom embed URL for the demo video. Defaults to the Sytrex demo video. |

### Slack (avoid CORS)

Slack’s webhook cannot be called from the browser (CORS). Use the proxy:

**Option A – Local (for development)**  
1. In `.env`, set `SLACK_WEBHOOK_URL` (your Slack webhook) and `VITE_SLACK_API_URL=http://localhost:3001/api/slack-demo`.  
2. In one terminal: `npm run server` (starts the proxy on port 3001).  
3. In another: `npm run dev`. Submit the form; the app will POST to the local proxy, which forwards to Slack.

**Option B – Production (Vercel)**  
1. Deploy this repo to [Vercel](https://vercel.com).  
2. In Vercel: **Settings → Environment Variables** → add `SLACK_WEBHOOK_URL` with your webhook URL.  
3. In `.env` (or your build env), set `VITE_SLACK_API_URL=https://your-project.vercel.app/api/slack-demo`.  
4. Rebuild/redeploy. Form submissions will go to the API route, which forwards to Slack.

## Development

```bash
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with:

```bash
npm run preview
```

## Favicon

The app expects a favicon at `public/favicon.ico`. Replace the placeholder with the **Sytrex logo** (e.g. export as ICO or use an SVG and update the `<link rel="icon">` in `index.html` if needed).

## Tech stack

- **Vite** + **React** 18
- **React Router** v6
- Plain CSS (variables in `src/index.css`)

## License

Proprietary – Sytrex.
