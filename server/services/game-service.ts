import { Pagination } from "../../client/src/types-aliases/Pagination";
import axios from "axios";
export function getGames<Pagination>(page: number, page_size: number): Promise<any> {
  console.log("server : %s %s",page,page_size)
  return axios
    .get(
      `https://api.rawg.io/api/games?key=b79832bd57fe4483b35b15c8b83e51df&page=${page}&page_size=${page_size}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error.code));
}
