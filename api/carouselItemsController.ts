import { Request, Response } from 'express';
import carouselItemsService from './carouselItemsService';

const FIELDS = ['title', 'description', 'pictureUrl', 'destinationUrl'];

const carouselItemsController = {
  index: async (req: Request, res: Response) => {
    const carouselItems = await carouselItemsService.findAll(FIELDS);
    res.send(carouselItems);
  },
};

export default carouselItemsController;
