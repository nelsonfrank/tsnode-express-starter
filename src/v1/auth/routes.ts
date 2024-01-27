import { Router, Request, Response } from "express";
import controller from './controller';
const router = Router();

// @route GET /auth
// @desc  Authenticate User
// @access Public
router.get("/", (req: Request, res: Response) => {
    res.send(200);
});

// @route POST /login
// @desc  Login User
// @access Public
router.post("/login", controller.login);

// @route POST /logout
// @desc  Logout User
// @access Public
router.post("/logout", controller.logout);

// @route POST /forget-password
// @desc  Reset user password
// @access Public
router.post("/forget-password", controller.forgetPassword);

// @route POST /create-account
// @desc  Create User account
// @access Public
router.post("/create-account", controller.createAccount);

// @route POST /activate-account
// @desc  Activate user account
// @access Public
router.post("/activate-account", controller.activateAccount);

// @route POST /deactivate-account
// @desc  Deactivate user account
// @access Public
router.post("/deactivate-account", controller.deactivateAccount);


export default router;