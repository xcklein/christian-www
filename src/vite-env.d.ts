// https://vite.dev/guide/env-and-mode#intellisense-for-typescript

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

type ImportMetaEnv = Record<string, string>;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
