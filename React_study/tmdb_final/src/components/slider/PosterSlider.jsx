//영화 슬라이더

import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';




import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/PosterSlider.css';



// import required modules
import { Navigation } from 'swiper/modules';
import { fetchMovies } from '../../features/movies/moviesSlice';

function PosterSlider() {
     
    const dispatch = useDispatch()
    const { movies, loading, error } = useSelector((state) => state.movies)
    
    useEffect(() => { 
        dispatch(fetchMovies({category:'now_playing',page:1}))
    }, [dispatch])
    
    if (loading) return <p>loding...</p>
    if (error) return <p>error...</p>
    
  return (
    <>
      <Swiper  slidesPerView={5}
              spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
              {movies.map((movie) => (
                  <SwiperSlide key={movie.id}>
                      <img src={ `https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>
                  </SwiperSlide>
              ))}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </>
  );
}
export default  PosterSlider