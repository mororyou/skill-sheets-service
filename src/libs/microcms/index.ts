import { env } from '@/utils/env';
import { createClient } from 'microcms-js-sdk';

const microCMSClient = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});

export default microCMSClient;
