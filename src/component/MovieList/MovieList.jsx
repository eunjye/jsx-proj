import MovieListItem from './MovieListItem';
import React, { useState, useEffect } from 'react';
// import { dummy } from '../dummy';

const MovieList = () => {
    const [movieData, setMovieData] = useState({});
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTgwODMyMTYxOWRkZGUzNTFmYjYzZmZlNTk2OTA4MiIsInN1YiI6IjY0Y2RiOTAwMDBmYjZiMDBjNzI3MDhhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ezE5WGyjQjv2mTXUwTi0DXrKpk8EdLsy-ZGH_IpMkPk'
        }
    };

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1', options)
            .then(response => response.json())
            .then(response => {
                setMovieData(response);
                console.log(response);
                console.log(movieData, '@')
            })
            .catch(err => console.error(err));

    }, [])

    return (
        <ul>
            {
                !!movieData.results && movieData.results.map((movieItem, idx) => {
                    return (
                        <MovieListItem key={idx} title={movieItem.title} poster_path={movieItem.poster_path} vote_average={movieItem.vote_average} />
                    )
                })
            }
        </ul>
    );
};

export default MovieList;