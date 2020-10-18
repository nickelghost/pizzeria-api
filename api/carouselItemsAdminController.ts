import { Request, Response } from 'express';
import { S3Uploader } from '../lib/uploader/s3';
import carouselItemsService from './carouselItemsService';

const carouselItemsAdminController = {
  index: async (req: Request, res: Response) => {
    const carouselItems = await carouselItemsService.findAll('*');
    res.send(carouselItems);
  },
  create: async (req: Request, res: Response) => {
    const { title, description, pictureString, destinationUrl } = req.body;
    const uploader = new S3Uploader();
    const { url: pictureUrl } = await uploader.add(pictureString);
    const carouselItem = await carouselItemsService.create({
      title,
      description,
      destinationUrl,
      pictureUrl,
    });
    res.send(carouselItem);
  },
};

export default carouselItemsAdminController;
