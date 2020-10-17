import { Router } from 'express';

import carouselItemsController from './api/carouselItemsController';

const router = Router();

router.get('/carousel-items', carouselItemsController.index);

export default router;
