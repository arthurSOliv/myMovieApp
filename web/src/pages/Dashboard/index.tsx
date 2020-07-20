import React, { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Title, Form, MoviesDiv, Link } from './styles';
import movieApi from '../../services/movie';
import api from '../../services/api';

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const { id } = useParams();

  async function handleMovieSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await movieApi.get(`/?apikey=925eba28&s=${search}`);

    const foundMovies = response.data.Search;

    setSearch('');
    setMovies(foundMovies);
  }

  async function handleFavoriteMovie(imdbId: string) {
    const user = {
      imdbID: imdbId,
    };

    try {
      await api.post(`/favorites/${id}`, user);
    } catch (error) {
      alert('Error to added');
      return;
    }

    alert('Added to favorites');
  }
  return (
    <>
      <Title>Dashboard</Title>
      <Link href={`/favorites/${id}`}>Favorites</Link>
      <Form onSubmit={handleMovieSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type the name of the movie"
          className="login"
        />
        <button type="submit">Search</button>
      </Form>
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
              onClick={() => handleFavoriteMovie(movie.imdbID)}
            >
              Favorite
            </button>
          </span>
        ))}
      </MoviesDiv>
    </>
  );
};

export default Dashboard;
