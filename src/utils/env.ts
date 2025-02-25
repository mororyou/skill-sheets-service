import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MICROCMS_API_KEY: z.string(),
    MICROCMS_API_URL: z.string().url(),
  },
  runtimeEnv: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_API_URL: process.env.MICROCMS_API_URL,
  },
});
