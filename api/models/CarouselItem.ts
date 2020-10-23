import { DateTime } from 'aws-sdk/clients/devicefarm';

type CarouselItem = {
  id: string;
  title: string;
  description?: string;
  pictureUrl: string;
  pictureKey: string;
  destinationUrl?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export default CarouselItem;
