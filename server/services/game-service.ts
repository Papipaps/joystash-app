import { Pagination } from "../../client/src/types-aliases/Pagination";
import axios from "axios";

export function getGames<Pagination>(page=1, page_size=10): Promise<any> {
    return axios
    .get(
      `https://api.rawg.io/api/games?key=${process.env['RAWG_API']}&page=${page}&page_size=${page_size}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error.code));
}
