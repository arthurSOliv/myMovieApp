import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TitleNav, MoviesDiv, Link } from './styles';
import api from '../../services/api';
import movieApi from '../../services/movie';

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

interface Favorite {
  id: string;
  userId: string;
  imdbID: string;
}

const Favorites: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { id } = useParams();

  useEffect(() => {
    api.get<Favorite[]>(`/favorites/${id}`).then(response => {
      const fav = response.data;
      setFavorites(fav);
    });
  });

  useEffect(() => {
    const dataMovie: Movie[] = [];
    if (favorites.length > 0) {
      // eslint-disable-next-line array-callback-return
      favorites.map(favorite => {
        movieApi
          .get(`/?apikey=925eba28&i=${favorite.imdbID}`)
          .then(response => {
            const { Poster, Title, Year, imdbID }: Movie = response.data;

            const movie: Movie = {
              Poster,
              Title,
              Year,
              imdbID,
            };

            dataMovie.push(movie);

            setMovies([]);

            setMovies(dataMovie);
          });
      });
    }
  }, [favorites]);

  async function handleRemoveFavorite(imdbId: string) {
    try {
      await api.delete(`/favorites/${id}/${imdbId}`);
    } catch (error) {
      alert('Error to delete');
      return;
    }

    window.location.reload();
  }

  return (
    <>
      <TitleNav>Favorites</TitleNav>
      <Link href={`/dashboard/${id}`}>Dashboard</Link>
      <MoviesDiv>
        {movies.map(movie => (
          <span key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <strong>{movie.Title}</strong>
              <p>{movie.Year}</p>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveFavorite(movie.imdbID)}
            >
              Remove
            </button>
          </span>
        ))}
      </MoviesDiv>
    </>
  );
};

export default Favorites;
