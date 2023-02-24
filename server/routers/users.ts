import {t} from "../trpc"
export const userRouter = t.router({
    getGame: t.procedure.query(() => {
      return {id:1, name:"fortnite"};
    }),
  });