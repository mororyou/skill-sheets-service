import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    MICROCMS_API_KEY: z.string(),
    MICROCMS_SERVICE_DOMAIN: z.string(),
  },
  runtimeEnv: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  },
});
