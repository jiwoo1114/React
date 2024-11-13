//배우 슬라이더
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieCredits } from '../../features/movies/moviesSlice';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../css/CreditSlider.css'


function CreditSlider({ movieId }) {
    const dispatch = useDispatch()
    const { movieCredits, loading, error } = useSelector((state) =>
        state.movies);

     
    useEffect(() => {
        if (movieId) {
            dispatch(fetchMovieCredits(movieId))
        }
    }, [dispatch,movieId])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className='common_margin_tb' >
            <h2>출연배우</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                scrollbar={{
                    hide: false,
                }}
                autoplay={{
                    delay: 3000, //3초
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper"
            >{movieCredits && movieCredits.cast.map((cast) => (
                <SwiperSlide key={cast.id}>
                    <div style={{ padding: 20 }}>
                        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : '/images/person.png' } alt={ cast.name } />
                    <p style={{ fontWeight: 'bold' }}>{ cast.name }</p>
                    </div>
                </SwiperSlide>
            ) )}
            </Swiper>
        </div>
    );
}

export default CreditSlider
