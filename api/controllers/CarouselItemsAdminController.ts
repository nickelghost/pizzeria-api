import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import setContentRangeHeader from '../lib/setContentRangeHeader';
import { S3Uploader } from '../lib/uploader/s3';
import Uploader from '../lib/uploader/uploader';
import CarouselItem from '../models/CarouselItem';
import CarouselItemsService from '../services/CarouselItemsService';

const schemas = {
  create: yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    picture: yup.string().required(),
    destinationUrl: yup.string(),
  }),
};

class CarouselItemsAdminController {
  service = new CarouselItemsService();
  uploader: Uploader = new S3Uploader();

  index = async (req: Request, res: Response, next: NextFunction) => {
    let carouselItems: CarouselItem[];
    try {
      carouselItems = await this.service.findAll('*');
    } catch (e) {
      return next(e);
    }
    const { length } = carouselItems;
    setContentRangeHeader(res, 0, length, length);
    res.send(carouselItems);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const reqValid = await schemas.create.isValid(req.body);
    if (!reqValid) {
      res.status(400).send();
      return next();
    }
    const { title, description, picture, destinationUrl } = req.body;
    let carouselItem: CarouselItem;
    try {
      const { url: pictureUrl, key: pictureKey } = await this.uploader.add(
        picture,
      );
      carouselItem = await this.service.create({
        title,
        description,
        pictureUrl,
        pictureKey,
        destinationUrl,
      });
    } catch (e) {
      return next(e);
    }
    res.send(carouselItem);
  };

  destroy = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    let carouselItem: CarouselItem;
    try {
      carouselItem = await this.service.destroy(id);
    } catch (e) {
      return next(e);
    }
    res.send(carouselItem);
  };
}

export default CarouselItemsAdminController;
