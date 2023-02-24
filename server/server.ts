import express from "express";
import cors from "cors"

import { t } from "./trpc";
import * as trpcExpress from '@trpc/server/adapters/express'

 import {appRouter} from './routers'




const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.listen(3000);

app.use("/trpc",trpcExpress.createExpressMiddleware({
    router:appRouter
}))

export type AppRouter = typeof appRouter;