
import { Request, Response } from "express";

const AuthController = {
    login: (req: Request, res: Response) => {
        return res.status(200).json([])
    },

    logout: (req: Request, res: Response) => {
        return res.status(200).json([])
    },

    forgetPassword: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
    createAccount: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
    activateAccount: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
    deactivateAccount: (req: Request, res: Response) => {
        return res.status(201).json([])
    },
}

export default AuthController