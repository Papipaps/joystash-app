import { User } from "../models/user";
import { client } from "../pgConfig";

interface GetUsersParams {
  page: number;
  pageSize: number;
}

interface UpdateUserParams {
  name?: string;
  age?: number;
}
const defaultPage: GetUsersParams = { page: 1, pageSize: 10 };

export class UserService {
  public async getUsers({ page = 1, pageSize = 10 } = defaultPage): Promise<User[]> {
    const offset = (page - 1) * pageSize;
    const { rows } = await client.query<User>(
      "SELECT * FROM users ORDER BY created_at DESC OFFSET $1 LIMIT $2",
      [offset, pageSize]
    );
    return rows;
  }

  public async getUserById(id: string): Promise<User | null> {
    client.connect();

    const { rows } = await client.query<User>(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    client.end();
    return rows[0] || null;
  }

  public async updateUser(id: string, params: UpdateUserParams): Promise<User> {
 
    const { name, age } = params;
    const { rows } = await client.query<User>(
      "UPDATE users SET name = COALESCE($2, name), age = COALESCE($3, age) WHERE id = $1 RETURNING *",
      [id, name, age]
    );
 
    return rows[0];
  }

  public async deleteUserById(id: string): Promise<User> {
 
    const { rows } = await client.query<User>(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
 
    return rows[0];
  }
}
