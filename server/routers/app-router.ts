import { t } from "../trpc";
import { z as validator } from "zod";
import {greetingsRouter} from "./greetings-route"
import {userRouter} from "./user-router"
import {gameRouter} from "./game-router"
 
export const appRouter = t.router({
    user:userRouter,
    game:gameRouter,
    greetings:greetingsRouter
})
