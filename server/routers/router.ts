import { t } from "../trpc";
import { z as validator } from "zod";

import * as GameService from "../services/game-service";

const gameProcedure = t.procedure.input(
  validator.object({
    // id: validator.number(),
    page: validator.number(),
    page_size: validator.number(),
  })
);

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
  getGames: gameProcedure.query(({ input }) => {
    console.log(input)
    return GameService.getGames(input.page, input.page_size);
  }),
});
