type CarouselItem = {
  id: string;
  title: string;
  description?: string;
  pictureUrl: string;
  pictureKey: string;
  destinationUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export default CarouselItem;
