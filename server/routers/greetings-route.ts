import {t} from "../trpc"

export const greetingsRouter = t.router({
    greetings: t.procedure.query(() => {
      return "Hello !";
    }),
    bye: t.procedure.query(() => {
      return "Goodbye !";
    }),
  });