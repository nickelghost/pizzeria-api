import { Router } from 'express';

import carouselItemsController from './api/carouselItemsController';
import carouselItemsAdminController from './api/carouselItemsAdminController';

const router = Router();

router.get('/carousel-items', carouselItemsController.index);

router.get('/admin/carousel-items', carouselItemsAdminController.index);
router.post('/admin/carousel-items', carouselItemsAdminController.create);

export default router;
