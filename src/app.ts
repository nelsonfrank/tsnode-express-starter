import express, { Application, Request, Response, NextFunction } from "express";
import routes from "routes";

export default function createApp() {
    const app: Application = express();

    // middleware to allow json parsing
    app.use(express.json());

    // create application/x-www-form-urlencoded parser
    app.use(express.urlencoded({ extended: false }))
    
    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("Hello world!");
    });

    app.use("/api/v1", routes);

    return app;
}