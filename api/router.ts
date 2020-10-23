import { Router } from 'express';

import CarouselItemsController from './controllers/CarouselItemsController';
import CarouselItemsAdminController from './controllers/CarouselItemsAdminController';

const carouselItemsController = new CarouselItemsController();
const carouselItemsAdminController = new CarouselItemsAdminController();

const router = Router();

router.get('/carousel-items', carouselItemsController.index);

router.get('/admin/carousel-items', carouselItemsAdminController.index);
router.post('/admin/carousel-items', carouselItemsAdminController.create);
router.delete(
  '/admin/carousel-items/:id',
  carouselItemsAdminController.destroy,
);

export default router;
