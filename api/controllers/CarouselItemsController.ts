import { NextFunction, Request, Response } from 'express';

import CarouselItem from '../models/CarouselItem';
import CarouselItemsService from '../services/CarouselItemsService';

const FIELDS = ['title', 'description', 'pictureUrl', 'destinationUrl'];

class CarouselItemsController {
  service = new CarouselItemsService();

  index = async (req: Request, res: Response, next: NextFunction) => {
    let carouselItems: CarouselItem[];
    try {
      carouselItems = await this.service.findAll(FIELDS);
    } catch (e) {
      return next(e);
    }
    res.send(carouselItems);
  };
}

export default CarouselItemsController;
