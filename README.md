# christian-www

Hello hello! Welcome to my site. This is intended to act as a cross between a professional portfolio and a fun playground. Feel free to snoop around the source code to see how I work. Check out the site at https://christian.gg.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Tweakcn](https://tweakcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Lefthook](https://lefthook.dev/), [commitlint](https://commitlint.js.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Testing**: [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Development

### Prerequisites

- Node.js 24+ (Recommend [Volta](https://volta.sh/))
- pnpm

### Installation

```bash
pnpm install
```

### Run It

```bash
pnpm run dev
```

### Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the development server         |
| `pnpm build`   | Type check and build for production  |
| `pnpm test`    | Run the test suite                   |
| `pnpm lint`    | Lint the codebase                    |
| `pnpm format`  | Format the codebase with Prettier    |
| `pnpm preview` | Preview the production build locally |

### Environment Variables

Create a `.env` file in the root directory. These are validated at startup in `src/config.ts`.

| Variable                    | Description          | Public |
| --------------------------- | -------------------- | ------ |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key | Yes    |
| `VITE_HCAPTCHA_SITE_KEY`    | hCaptcha site key    | Yes    |

Both values are public client-side identifiers, not secrets. Vite inlines any `VITE_`-prefixed variable into the client bundle, and both vendors are designed around that: an hCaptcha site key is rendered into the widget markup, and a Web3Forms access key is submitted as a form field. Their private counterparts, the hCaptcha secret key and the Web3Forms account credentials, are held server-side by those vendors and never appear in this repository. They live in `.env` purely so deployments can swap them per environment.

## Project Structure

```
src/
├── components/     # Reusable components
├── contexts/       # React contexts
├── hooks/          # React hooks
├── pages/          # Page components
├── routing/        # Routing
├── styles/         # Global CSS
└── lib/            # Shared utilities, constants, and data
```

## Deployment

The site is deployed on Vercel with automatic deployments triggered on pushes to the main branch.

## License

All rights reserved.
