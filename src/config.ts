import { z } from "zod";

const schema = z.object({
  WEB3FORMS_ACCESS_KEY: z.string().nonempty(),
  HCAPTCHA_SITE_KEY: z.string().nonempty(),
});

export const CONFIG = schema.parse({
  WEB3FORMS_ACCESS_KEY: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  HCAPTCHA_SITE_KEY: import.meta.env.VITE_HCAPTCHA_SITE_KEY,
});
