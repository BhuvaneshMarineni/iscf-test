# ISCF Website Deployment Guide

## Quick Deploy

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and use the correct settings
3. The `vercel.json` file contains optimized configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. The `netlify.toml` file contains the configuration

### Manual Deployment
```bash
npm install
npm run build
npm start
```

## Environment Variables
Copy `.env.example` to `.env.local` and configure as needed:
```bash
cp .env.example .env.local
```

## Build Requirements
- Node.js 18+ 
- npm 9+

## Common Deployment Issues

### TypeScript Errors
Make sure all TypeScript errors are resolved before deployment:
```bash
npm run build
```

### Missing Dependencies
Ensure all dependencies are installed:
```bash
npm install
```

### Node Version
Verify you're using the correct Node.js version (18+):
```bash
node --version
```