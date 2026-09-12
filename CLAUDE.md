# CLAUDE.md

Instructions for AI agents working on this project. All guidance in this document shall be followed unless explicitly directed otherwise.

## Project Context

This is a professional portfolio website showcasing software engineering expertise, projects, and technical background. Content and presentation should be professional, contemporary, and reflective of senior-level engineering capabilities with diverse technical expertise.

Refer to README.md in the root directory for further context.

## Engineering Standards

This project must follow the standards defined in the [xcklein/standards](https://github.com/xcklein/standards) repository. Those ADRs are authoritative; consult them before making architectural, tooling, or UI decisions, and raise any conflict with the guidance below rather than silently choosing one.

## Development Standards

All contributions must maintain:

- Professional tone and design standards
- TypeScript strict mode enabled
- Full ESLint and Prettier compliance
- WCAG 2.1 AA accessibility standards minimum
- Mobile-first responsive design approach
- Performance optimization as a priority
- Tailwind CSS for styling (no raw CSS unless necessary)
- Component-focused tests validating core functionality and behavior
- Never change the theme without explicit direction
- Only use colors from the theme

## Verification

Before considering a change complete, all three must pass:

```bash
pnpm build
pnpm lint
pnpm test
```

## Important Notes

- Animations use the `motion` package, imported from `motion/react`
- Environment variables are validated with Zod in `src/config.ts` and accessed through the exported `CONFIG` object, never through `import.meta.env` directly
- Commits must follow [Conventional Commits](https://www.conventionalcommits.org/); commitlint and ESLint run automatically via Lefthook hooks
- Use the `@/` path alias for imports from `src/`
- Maintain consistency with existing code patterns and conventions

## Pull Requests

When reviewing pull requests, follow these guidelines:

- Do not offer feedback related to code with ongoing or resolved comment threads.
- Do not offer feedback on code that is unchanged.
- Do not offer feedback related to missing or incomplete code documentation.
- Do not offer feedback on TODO comments.
