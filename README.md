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

## Deployment

The site is deployed on Vercel with automatic deployments triggered on pushes to the main branch.

## License

All rights reserved.
