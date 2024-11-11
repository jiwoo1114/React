import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/moviesSlice";




function MovieList() {
    const dispatch = useDispatch()
    const { movies, loading, error } = useSelector((state) => state.movies)

    useEffect(() => {dispatch(fetchMovies())},[])
    
    return ( 
        <div>
            <h1>인기 영화</h1>
            <ul>  
                {movies.map((movie) =>(
                <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
     );
}

export default MovieList;