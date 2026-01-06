# Vercel Web Analytics Setup Guide

This document describes how Vercel Web Analytics is configured and used in the christian-www project.

## Overview

Vercel Web Analytics provides real-time insights into your site's performance and user behavior. It tracks visitor data, page views, and Core Web Vitals without requiring a separate service or complex configuration.

## Current Setup

### Package Installation

The `@vercel/analytics` package is already installed as a dependency:

```json
"@vercel/analytics": "^1.6.1"
```

Install dependencies using:

```bash
pnpm install
```

### React Integration

The Analytics component is integrated into the root App component located in `src/app.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { RouteWrapper } from "./routing/route-wrapper";

export function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <RouteWrapper />
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </StrictMode>
  );
}
```

### Vercel Configuration

The `vercel.json` file contains the necessary configuration for routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This ensures that client-side routing works correctly with single-page application (SPA) architecture.

## Features

### Automatic Tracking

Once deployed to Vercel, the Analytics component automatically collects:

- **Page Views**: Track every route change in your application
- **Route Information**: Understand which pages users visit
- **Core Web Vitals**: Monitor Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)
- **Performance Metrics**: Get insights into client-side performance

### Network Tab Verification

When visiting any page in development or production, you should see a request to `/_vercel/insights/view` in your browser's Network tab, confirming that analytics data is being collected.

## Accessing Analytics Data

### Dashboard Access

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the `christian-www` project
3. Click the **Analytics** tab

### Available Metrics

In the Analytics dashboard, you can view:

- **Visitor Count**: Total number of unique visitors
- **Page Views**: Number of pages viewed
- **Top Pages**: Most visited pages on your site
- **Core Web Vitals**: Performance metrics for user experience
- **Custom Events**: (Available on Pro and Enterprise plans)

### Time-Based Filtering

Analytics data is available for filtering by:

- Last 24 hours
- Last 7 days
- Last 30 days
- Custom date range

## Development vs. Production

### Development Mode

- Analytics are **not** collected locally when running `pnpm run dev`
- The component will not send data to Vercel Analytics when accessed via `localhost`

### Production Mode

- Analytics are automatically collected once deployed to Vercel
- Data appears in your dashboard within a few minutes of deployment
- All visitor interactions are tracked and accessible in real-time

## Troubleshooting

### No Data Appearing

If you don't see data in your Analytics dashboard:

1. **Verify Deployment**: Ensure your app is deployed to Vercel (not just running locally)
2. **Check Network Tab**: Open browser DevTools → Network tab and look for `/_vercel/insights/view` requests
3. **Wait for Data**: It may take a few minutes for initial data to appear
4. **Enable in Dashboard**: Verify that Web Analytics is enabled in your Vercel project settings

### Data Appears with Delay

Analytics data collection has minimal latency, but:
- Dashboard refresh may take up to 1-2 minutes
- Initial deployment may take up to 5 minutes to show data

## Best Practices

1. **Monitor Performance**: Regularly check Core Web Vitals to maintain good user experience
2. **Analyze Traffic**: Review top pages to understand user behavior
3. **Set Alerts**: Use Vercel's dashboard to set up alerts for performance degradation
4. **Custom Events**: Consider adding custom events on Pro/Enterprise plans to track user interactions

## Resources

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics/quickstart)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Vercel Analytics API](https://vercel.com/docs/analytics/rest-api)

## Additional Configuration

### Environment Variables

Currently, no additional environment variables are required for Vercel Web Analytics. The service automatically detects the deployment environment.

### Advanced Options

The `@vercel/analytics` React component accepts several optional props for customization:

```tsx
<Analytics
  mode="production" // or "development"
  beforeSend={(event) => {
    // Custom event processing
    return event;
  }}
/>
```

Refer to the [official documentation](https://vercel.com/docs/analytics/package/analytics) for detailed configuration options.

## Support

For issues or questions about Vercel Web Analytics:

1. Check the [Vercel Documentation](https://vercel.com/docs/analytics)
2. Review the [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)
3. Contact [Vercel Support](https://vercel.com/support)
