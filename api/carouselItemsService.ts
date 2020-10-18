import { v4 as uuidv4 } from 'uuid';

import db from '../lib/db';

const TABLE_NAME = 'carouselItems';

type CreateParams = {
  title: string;
  description?: string;
  pictureUrl: string;
  pictureKey: string;
  destinationUrl?: string;
};

const carouselItemsService = {
  findAll: async (fields: string | string[]): Promise<any[]> => {
    const carouselItems = await db(TABLE_NAME).select(fields);
    return carouselItems;
  },
  create: async ({
    title,
    description,
    pictureUrl,
    pictureKey,
    destinationUrl,
  }: CreateParams): Promise<any> => {
    const [carouselItem] = await db(TABLE_NAME)
      .insert({
        id: uuidv4(),
        title,
        description,
        pictureUrl,
        pictureKey,
        destinationUrl,
      })
      .returning('*');
    return carouselItem;
  },
  destroy: async (id: string): Promise<any> => {
    const [carouselItem] = await db(TABLE_NAME)
      .where({ id })
      .first()
      .del()
      .returning('*');
    return carouselItem;
  },
};

export default carouselItemsService;
