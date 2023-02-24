import {t} from "../trpc"

import {userRouter} from './users'

export const appRouter = t.router({
    greeting: t.procedure.query(() => {
      return "Hello World !";
    }),
    testInput: t.procedure
      .input((message) => {
        if (typeof message === "string") return message;
        throw new Error("Expected string");
      })
      .mutation((req) => {
        console.log(`Input received from client : ${req.input}`);
        return req.input;
      }),
   });