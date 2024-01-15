import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import createServer from "server";

const startServer = () => {
    const app = createServer();
    const port: number = parseInt(<string>process.env.PORT, 10) || 4000;
    app.listen(port, () => {
        console.log(`[server]: ⚡⚡Server is running at port ${port}`);
    });
};

startServer();