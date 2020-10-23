import { v4 as uuidv4 } from 'uuid';

import db from '../lib/db';
import CarouselItem from '../models/CarouselItem';

const TABLE_NAME = 'carouselItems';

class CarouselItemsService {
  findAll = async (fields: string | string[]): Promise<CarouselItem[]> => {
    const carouselItems: CarouselItem[] = await db(TABLE_NAME).select(fields);
    return carouselItems;
  };

  create = async ({
    title,
    description,
    pictureUrl,
    pictureKey,
    destinationUrl,
  }: {
    title: string;
    description?: string;
    pictureUrl: string;
    pictureKey: string;
    destinationUrl?: string;
  }): Promise<CarouselItem> => {
    const carouselItem: CarouselItem = await db(TABLE_NAME)
      .insert({
        id: uuidv4(),
        title,
        description,
        pictureUrl,
        pictureKey,
        destinationUrl,
      })
      .returning('*')
      .then((rows) => rows[0]);
    return carouselItem;
  };

  destroy = async (id: string): Promise<CarouselItem> => {
    const carouselItem: CarouselItem = await db(TABLE_NAME)
      .where({ id })
      .first()
      .del()
      .returning('*')
      .then((rows) => rows[0]);
    return carouselItem;
  };
}

export default CarouselItemsService;
