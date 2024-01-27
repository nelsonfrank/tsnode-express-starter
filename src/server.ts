import "dotenv/config";
import createApp from "app";

const startServer = () => {
    const app = createApp();
    const port: number = parseInt(<string>process.env.PORT, 10) || 4000;
    app.listen(port, () => {
        console.log(`[server]: ⚡⚡Server is running at port ${port}`);
    });
};

startServer();