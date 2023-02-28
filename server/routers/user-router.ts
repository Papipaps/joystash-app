 
import { UserService } from "../users/user-service";
import { z } from "zod";
import { t } from "../trpc";

const { getUsers } = new UserService();

const userPageProcedure = t.procedure
  .input(
    z.object({
      page: z.number(),
      pageSize: z.number(),
    }).optional()
  )
  .query(({ input }) => {
    if(!input)
      return getUsers();
    return getUsers({ ...input });
  });

// const userByIdProcedure = t.procedure({
//   input: z.object({
//     id: z.number(),
//   }),
//   async resolve({ input }) {
//     const id = input.id;
//     return await getUserById(id);
//   },
// });

// const updateUserProcedure = t.procedure({
//   input: z.object({
//     id: z.number(),
//     firstName: z.string(),
//     lastName: z.string(),
//     age: z.number(),
//     message: z.string(),
//   }),
//   async resolve({ input }) {
//     const { id, ...rest } = input;
//     return await updateUser(id, rest as Partial<User>);
//   },
// });

// const deleteUserByIdProcedure = t.procedure({
//   input: z.object({
//     id: z.number(),
//   }),
//   async resolve({ input }) {
//     const id = input.id;
//     return await deleteUserById(id);
//   },
// });

export const userRouter = t.router({
  list: userPageProcedure,
});
