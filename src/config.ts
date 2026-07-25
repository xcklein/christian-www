import { z } from "zod";

const envSchema = z.object({
  VITE_WEB3FORMS_ACCESS_KEY: z.string(),
  VITE_HCAPTCHA_SITE_KEY: z.string(),
});

const env = envSchema.parse(import.meta.env);

export const CONFIG = {
  WEB3FORMS_ACCESS_KEY: env.VITE_WEB3FORMS_ACCESS_KEY,
  HCAPTCHA_SITE_KEY: env.VITE_HCAPTCHA_SITE_KEY,
} as const;
