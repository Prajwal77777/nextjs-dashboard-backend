import express from "express";
import http from "http"
import helmet from "helmet"
import cors from "cors"

const router = express()

const startServer =  () => {
    router.use((req, res, next) => {
        console.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`)
        res.on('finish', () => {
            console.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`)
        })
        next()
    })

    router.use(express.urlencoded({ extended: true }))
    router.use(express.json())

    /** CORS setup*/
    router.use(helmet())
    router.use(cors())
    /** Error handling*/

    router.use((req, res, next) => {
        const error = new Error("Not found");
        console.error(error);
        res.status(404).json({
            message: error.message,
        });
        next();
    });

    http.createServer(router)
        .listen(process.env.PORT || 3000, ()=> console.info(`Listening on port ${process.env.PORT || 3000}`));
}

startServer()
