import AWS from 'aws-sdk';
import FileType from 'file-type';
import { v4 as uuidv4 } from 'uuid';

import config from '../../config';
import Uploader from './uploader';

const s3 = new AWS.S3({
  endpoint: config.s3.endpoint,
  region: config.s3.region,
  credentials: {
    accessKeyId: config.s3.accessKeyId,
    secretAccessKey: config.s3.secretAccessKey,
  },
});

export class S3Uploader implements Uploader {
  add = async (file: string) => {
    const buff = Buffer.from(file, 'base64');
    const mime = await FileType.fromBuffer(buff);
    const params: AWS.S3.PutObjectRequest = {
      ACL: 'public-read',
      Body: buff,
      Bucket: config.s3.bucket,
      ContentType: mime.mime,
      Key: `${uuidv4()}.${mime.ext}`,
    };
    const res = await s3.upload(params).promise();
    return {
      key: res.Key,
      url: res.Location,
    };
  };
  remove = async (url: string) => {};
}
