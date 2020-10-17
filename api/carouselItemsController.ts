import { Request, Response } from 'express';
import carouselItemsService from './carouselItemsService';

const carouselItemsController = {
  index: async (req: Request, res: Response) => {
    const carouselItems = await carouselItemsService.findAll();
    res.send(carouselItems);
  },
};

export default carouselItemsController;
