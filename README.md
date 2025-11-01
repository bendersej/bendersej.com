# Cloudflare Pages Deployment

This website is configured to deploy as a static site on Cloudflare Pages.

## Prerequisites

Install Wrangler CLI globally:
```bash
npm install -g wrangler
```

Login to Cloudflare:
```bash
wrangler login
```

## Build

Generate static export:
```bash
npm run build
```

This creates the `out` directory with static HTML/CSS/JS files.

## Deploy

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

Or manually:
```bash
wrangler pages deploy out
```

## Local Preview

Preview the built site locally:
```bash
npm run preview
```

## Configuration

- **next.config.js**: Configured for static export with `output: 'export'`
- **wrangler.toml**: Cloudflare Pages configuration
- **Build output**: `out` directory

## Environment Variables

The following environment variables are configured:
- `GOOGLE_ANALYTICS_TAG`: Set in next.config.js

To add more environment variables in Cloudflare Pages:
1. Go to your Pages project dashboard
2. Settings > Environment variables
3. Add variables for production/preview

## Continuous Deployment

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to Cloudflare Dashboard > Pages
3. Create new project > Connect to Git
4. Select repository
5. Configure build:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: 20

Cloudflare will automatically deploy on every push to main.

### Option 2: Direct Upload

Use `npm run deploy` to manually deploy from local machine.

## Notes

- Static export means no server-side rendering
- All pages are pre-rendered at build time
- Images are unoptimized (no Next.js image optimization)
- Trailing slashes enabled for better compatibility
