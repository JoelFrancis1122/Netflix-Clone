import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../constants/constants';
import axios from '../constants/axios';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // Fetch trending movies
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      
      setMovie(randomMovie);

      // Fetch the movie's trailer
      axios.get(`/movie/${randomMovie.id}/videos?api_key=${API_KEY}&language=en-US`).then((trailerResponse) => {
        if (trailerResponse.data.results.length !== 0) {
          const trailerKey = trailerResponse.data.results[0].key;
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailerKey}`);
        } else {
          console.log('No trailer available');
        }
      });
    });
  }, []);

  const handlePlayButtonClick = () => {
    if (trailerUrl) {
      window.open(trailerUrl, '_blank'); // Open the YouTube trailer in a new tab
    } else {
      alert('Trailer not available');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? (movie.title || movie.name) : ''}</h1>
        <div className='banner_buttons'>
          <button className='button' onClick={handlePlayButtonClick}>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
