import microCMSClient from '@/libs/microcms';
import { createClient } from 'microcms-js-sdk';

export default class MicroCMSBaseRepository {
  constructor(protected readonly client: ReturnType<typeof createClient>) {
    this.client = microCMSClient;
  }
}
