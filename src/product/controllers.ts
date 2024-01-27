
import  {  Request, Response  } from "express";

const ProductController = {
    getProducts: (req: Request, res: Response) => {
        return res.status(200).json([])
    },

    getProductById: (req: Request, res: Response) => {
        return res.status(200).json([])
    },

    createProduct: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
    updateProduct: (req: Request, res: Response) => {
        return res.status(201).json([])
    },

    deleteProduct: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
}

export default ProductController