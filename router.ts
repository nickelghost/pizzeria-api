import { Router } from 'express';

import carouselItemsController from './api/carouselItemsController';

const router = Router();

router.get('/carousel-items', carouselItemsController.index);

router.get('/admin/carousel-items', carouselItemsController.index);
router.post('/admin/carousel-items', carouselItemsController.create);

export default router;
