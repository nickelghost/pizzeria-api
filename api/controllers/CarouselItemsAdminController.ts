import { Request, Response } from 'express';

import { S3Uploader } from '../lib/uploader/s3';
import CarouselItemsService from '../services/CarouselItemsService';

class CarouselItemsAdminController {
  service = new CarouselItemsService();

  index = async (req: Request, res: Response) => {
    const carouselItems = await this.service.findAll('*');
    const { length } = carouselItems;
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('Content-Range', `carousel-items 0-${length}/${length}`);
    res.send(carouselItems);
  };

  create = async (req: Request, res: Response) => {
    const { title, description, pictureString, destinationUrl } = req.body;
    const uploader = new S3Uploader();
    const { url: pictureUrl, key: pictureKey } = await uploader.add(
      pictureString,
    );
    const carouselItem = await this.service.create({
      title,
      description,
      pictureUrl,
      pictureKey,
      destinationUrl,
    });
    res.send(carouselItem);
  };

  destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    const carouselItem = await this.service.destroy(id);
    res.send(carouselItem);
  };
}

export default CarouselItemsAdminController;
