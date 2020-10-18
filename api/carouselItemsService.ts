import { v4 as uuidv4 } from 'uuid';

import db from '../lib/db';

const TABLE_NAME = 'carouselItems';

type CreateParams = {
  title: string;
  description?: string;
  pictureUrl: string;
  destinationUrl?: string;
};

const carouselItemsService = {
  findAll: async (fields: Array<string> | string) => {
    const carouselItems = await db(TABLE_NAME).select(fields);
    return carouselItems;
  },
  create: async ({
    title,
    description,
    pictureUrl,
    destinationUrl,
  }: CreateParams) => {
    const carouselItem = await db(TABLE_NAME)
      .insert({ id: uuidv4(), title, description, pictureUrl, destinationUrl })
      .returning('*');
    return carouselItem;
  },
};

export default carouselItemsService;
