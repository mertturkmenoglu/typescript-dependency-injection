import { Service } from "typedi";
import User from "../models/User";

@Service()
class UserRepository {
  private readonly users: User[] = [
    { name: 'Emily' },
    { name: 'John' },
    { name: 'Jane' },
  ];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}

export default UserRepository;
