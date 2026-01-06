# christian-www

A professional portfolio website showcasing software engineering expertise, projects, and technical background. Built with modern web technologies prioritizing performance, accessibility, and user experience.

## Tech Stack

- **Framework**: React 19+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme system
- **Routing**: React Router for client-side navigation
- **UI Components**: shadcn/ui component library
- **Code Quality**: ESLint and Prettier
- **Package Manager**: pnpm
- **Testing**: Vitest
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

The development server runs at `http://localhost:5173`

### Build

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Linting

```bash
pnpm run lint
```

### Testing

```bash
pnpm run test
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts
├── hooks/          # React hooks
├── pages/          # Page components
├── routing/        # Routing configuration
├── styles/         # Global styles
└── lib/            # Utility functions
```

## Analytics

Vercel Web Analytics is enabled on this project to track visitor data and page views. The `@vercel/analytics` package provides real-time insights into your site's performance and user behavior.

### How It Works

The Analytics component is integrated into the root App component (`src/app.tsx`):

```tsx
import { Analytics } from "@vercel/analytics/react";

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

Once deployed to Vercel, the analytics script automatically collects:
- Page views with route information
- Core Web Vitals metrics
- Client-side performance data

You can view analytics data in your Vercel dashboard under the Analytics tab of your project.

For more information on configuring and using Vercel Web Analytics, visit the [official documentation](https://vercel.com/docs/analytics/quickstart).

## Deployment

The site is deployed on Vercel with automatic deployments triggered on pushes to the main branch.

## License

All rights reserved.
