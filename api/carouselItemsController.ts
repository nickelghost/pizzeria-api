import { Request, Response } from 'express';
import carouselItemsService from './carouselItemsService';

const carouselItemsController = {
  index: async (req: Request, res: Response) => {
    const carouselItems = await carouselItemsService.findAll();
    res.send(carouselItems);
  },
  create: async (req: Request, res: Response) => {
    const { title, description, pictureString, destinationUrl } = req.body;
    const carouselItem = await carouselItemsService.create({
      title,
      description,
      destinationUrl,
      pictureUrl: 'https://example.com/picture.jpg',
    });
    res.send(carouselItem);
  },
};

export default carouselItemsController;
