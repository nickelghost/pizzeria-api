import { Request, Response } from 'express';

import setContentRangeHeader from '../lib/setContentRangeHeader';
import { S3Uploader } from '../lib/uploader/s3';
import Uploader from '../lib/uploader/uploader';
import CarouselItemsService from '../services/CarouselItemsService';

class CarouselItemsAdminController {
  service = new CarouselItemsService();
  uploader: Uploader = new S3Uploader();

  index = async (req: Request, res: Response) => {
    const carouselItems = await this.service.findAll('*');
    const { length } = carouselItems;
    setContentRangeHeader(res, 0, length, length);
    res.send(carouselItems);
  };

  create = async (req: Request, res: Response) => {
    const { title, description, pictureString, destinationUrl } = req.body;
    const { url: pictureUrl, key: pictureKey } = await this.uploader.add(
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
