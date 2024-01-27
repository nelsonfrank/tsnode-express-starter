import { Router } from "express";
import controller from './controllers';
const router = Router();

router.get('/', controller.getProducts)

router.get('/:id', controller.getProductById)

router.post('/', controller.createProduct)

router.put('/:id', controller.updateProduct)

router.delete('/:id',controller.deleteProduct)

export default router;