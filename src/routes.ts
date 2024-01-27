import { Router } from "express";
import auth from "./auth";
import productRoutes from './product/routes';

const router = Router();

router.use("/auth", auth);
router.use("/products", productRoutes);

export default router;