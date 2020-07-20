import bcrypt from 'bcrypt';
import User from '../models/users';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async findUser(email: string, password: string): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.email === email);

    const index = await bcrypt
      .compare(password, this.users[userIndex].password)
      .then((result): boolean => {
        return result === true;
      });

    return index === true ? this.users[userIndex] : null;
  }

  public create(username: string, email: string, password: string): User {
    const user = new User(username, email, password);

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
