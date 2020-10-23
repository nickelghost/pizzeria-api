import { Request, Response } from 'express';
import CarouselItemsService from '../services/CarouselItemsService';

const FIELDS = ['title', 'description', 'pictureUrl', 'destinationUrl'];

class CarouselItemsController {
  service = new CarouselItemsService();

  index = async (req: Request, res: Response) => {
    const carouselItems = await this.service.findAll(FIELDS);
    res.send(carouselItems);
  };
}

export default CarouselItemsController;
