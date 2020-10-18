import { Request, Response } from 'express';
import { S3Uploader } from '../lib/uploader/s3';
import carouselItemsService from './carouselItemsService';

const carouselItemsAdminController = {
  index: async (req: Request, res: Response) => {
    const carouselItems = await carouselItemsService.findAll('*');
    const { length } = carouselItems;
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('Content-Range', `carousel-items 0-${length}/${length}`);
    res.send(carouselItems);
  },
  create: async (req: Request, res: Response) => {
    const { title, description, pictureString, destinationUrl } = req.body;
    const uploader = new S3Uploader();
    const { url: pictureUrl, key: pictureKey } = await uploader.add(
      pictureString,
    );
    const carouselItem = await carouselItemsService.create({
      title,
      description,
      pictureUrl,
      pictureKey,
      destinationUrl,
    });
    res.send(carouselItem);
  },
};

export default carouselItemsAdminController;
