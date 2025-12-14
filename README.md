# christian-www

A professional portfolio website showcasing software engineering expertise, projects, and technical background. Built with modern web technologies for performance, accessibility, and user experience.

## Features

- **Dark/Light Theme Support** - Seamless theme switching with persistent user preferences
- **Responsive Design** - Mobile-first approach ensuring perfect display across all devices
- **Accessibility First** - WCAG 2.1 AA compliant for inclusive user experience
- **Type-Safe** - Full TypeScript strict mode for code reliability
- **Performance Optimized** - Fast load times and smooth interactions

## Tech Stack

- **Framework**: React 19+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme system
- **Routing**: React Router for client-side navigation
- **UI Components**: shadcn/ui based component library
- **Code Quality**: ESLint + Prettier
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 24+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Create production build
pnpm run build

# Preview production build locally
pnpm run preview
```

### Code Quality

```bash
# Run ESLint
pnpm run lint
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # React contexts (theme management)
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── routing/        # Routing configuration
├── styles/         # Global and theme styles
└── lib/            # Utility functions
```

## Deployment

This site is deployed on Vercel. Push to the main branch to trigger automatic deployments.

## License

All rights reserved.
