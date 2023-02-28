import { getGames } from "../services/game-service";
import { z } from "zod";
import { t } from "../trpc";

 
const listPaginatedGames = t.procedure
  .input(
    z.object({
      page: z.number(),
      pageSize: z.number(),
    }).optional()
  )
  .query(({ input }) => {
    if(!input)
      return getGames();
    return getGames(input.page,input.pageSize);
  }); 

export const gameRouter = t.router({
  list: listPaginatedGames,
});
