import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://neondb_owner:MtsXBR1r5OAN@ep-summer-bonus-a14137d8.ap-southeast-1.aws.neon.tech/ai-content?sslmode=require"!);
export const db = drizzle(sql,{schema});
