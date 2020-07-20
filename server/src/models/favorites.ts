import { uuid } from 'uuidv4';

class Favorites {
  id: string;

  userId: string;

  imdbID: string;

  constructor(userId: string, imdbID: string) {
    this.id = uuid();
    this.userId = userId;
    this.imdbID = imdbID;
  }
}

export default Favorites;
