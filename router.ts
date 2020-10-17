import { Router } from 'express';

import carouselItemsController from './api/carouselItemsController';

const router = Router();

router.get('/', carouselItemsController.index);

export default router;
