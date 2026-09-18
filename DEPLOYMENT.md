# Deployment Guide

## Vercel Speed Insights Setup

This project has been configured with **Vercel Speed Insights** to track real user performance metrics.

### What Was Added

1. **Dependencies**: 
   - `@vercel/speed-insights` - Official Vercel Speed Insights package
   - `next` - Next.js framework for modern React applications
   - `react` & `react-dom` - React library

2. **Project Structure**:
   - `app/layout.tsx` - Root layout with SpeedInsights component
   - `app/page.tsx` - Home page
   - `app/chals-ai/page.tsx` - Route for existing CHALS AI content
   - `public/` - Static assets including original HTML files

3. **Configuration Files**:
   - `package.json` - Updated with Next.js scripts
   - `next.config.js` - Next.js configuration for static export
   - `tsconfig.json` - TypeScript configuration
   - `vercel.json` - Vercel deployment settings

### How It Works

The SpeedInsights component in `app/layout.tsx` automatically tracks:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)

### Deployment to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **For Production**:
   ```bash
   vercel --prod
   ```

4. **Or connect your GitHub repository**:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build

### Viewing Speed Insights

After deployment and user visits:
1. Go to your Vercel dashboard
2. Select your project
3. Navigate to the "Speed Insights" tab
4. View real-time performance metrics from actual users

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

### Features

- ✅ **Automatic Performance Tracking**: No additional configuration needed
- ✅ **Real User Monitoring**: Tracks actual user experiences
- ✅ **Zero Performance Impact**: Async loading doesn't affect page speed
- ✅ **Framework Integration**: Native Next.js support
- ✅ **Static Export**: Can be deployed as static files

### Notes

- Speed Insights data will only appear after the site receives traffic
- The tracking script is automatically injected at `/_vercel/speed-insights/*`
- No API keys or additional setup required when deployed on Vercel
- Works with both SSR and static export modes
