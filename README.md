# christian-www

A personal web portfolio built with [Next.js](https://nextjs.org/), [Material Tailwind](https://www.material-tailwind.com/), and [AWS](https://aws.amazon.com/).

See it live at [christian.gg](https://christian.gg).

## Features

- **Modern UI**: Built with Material Tailwind and custom components.
- **Blog**: Dynamic blog section with Markdown/code support.
- **Serverless Deployment**: Infrastructure as code using AWS CDK.
- **Optimized Images**: Custom image loader for performance.
- **Dark Mode**: Toggleable dark/light theme.

## Project Structure

```
src/
  app/            # Next.js app directory (pages, layouts, blog)
  components/     # Reusable React components
  libs/           # Utility libraries (image loader, posts)
  styles/         # Global and component styles
deploy/           # AWS CDK stacks and deployment scripts
public/           # Static assets
```

## Getting Started

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Run the development server:**

   ```powershell
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Deployment

Infrastructure is managed with AWS CDK (TypeScript):

- Edit stacks in `deploy/stacks/`
- Deploy with:
  ```powershell
  npm run deploy
  ```
