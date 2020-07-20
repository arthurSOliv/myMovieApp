import Favorites from '../models/favorites';

class FavoritesRepository {
  private favorites: Favorites[];

  constructor() {
    this.favorites = [];
  }

  public list(userId: string): Favorites[] | null {
    const listFavorites: Favorites[] = [];
    this.favorites.forEach(favorite => {
      if (favorite.userId === userId) {
        listFavorites.push(favorite);
      }
    });

    return listFavorites || null;
  }

  public create(userId: string, imdbID: string): Favorites {
    const favorite = new Favorites(userId, imdbID);

    this.favorites.push(favorite);

    return favorite;
  }

  public remove(userId: string, imdbID: string): Favorites {
    const favoriteIndex: number = this.favorites.findIndex(
      favorite => favorite.imdbID === imdbID && favorite.userId === userId,
    );

    const deletedItem = this.favorites[favoriteIndex];

    this.favorites.splice(favoriteIndex, 1);

    return deletedItem;
  }
}

export default FavoritesRepository;
