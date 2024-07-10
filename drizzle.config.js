/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:MtsXBR1r5OAN@ep-summer-bonus-a14137d8.ap-southeast-1.aws.neon.tech/ai-content?sslmode=require',
    }
  };
  