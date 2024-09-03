import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './RowPost.css';
import { API_KEY, imageUrl } from '../constants/constants';
import axios from '../constants/axios';

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(''); // Track the video ID for the trailer

  // Fetch movies when the component mounts
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (movieId) => {
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          const videoId = response.data.results[0].key; // Get the YouTube video ID
          if (trailerId === videoId) {
            // If the same trailer is clicked again, hide it
            setTrailerId('');
          } else {
            // Show the new trailer
            setTrailerId(videoId);
          }
        } else {
          console.log("No trailer available");
        }
      })
      .catch((err) => {
        console.error("Error fetching movie trailer:", err);
      });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <div key={movie.id} className='movie-container'>
            <img
              onClick={() => handleMovieClick(movie.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + movie.backdrop_path}`}
              alt={movie.title || movie.name || movie.original_title}
            />
            <div className="movie-title">
              {movie.title || movie.name || movie.original_title}
            </div>
          </div>
        ))}
      </div>
      {trailerId && (
        <YouTube
          videoId={trailerId} // Render the trailer for the current video ID
          opts={opts}
        />
      )}
    </div>
  );
};

export default RowPost;
