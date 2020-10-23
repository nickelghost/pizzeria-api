import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: Number(process.env.APP_PORT) || 3000,
  bodySizeLimit: process.env.APP_BODY_SIZE_LIMIT || '20mb',
  s3: {
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
};

export default config;
