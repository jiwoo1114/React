import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'

const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdhNmI5NjBiYjIxZmYzOTIzMWIyNGU4NzE1YzU4YSIsIm5iZiI6MTczMTI4Njc4OC4wMDI4NDQ4LCJzdWIiOiI2NzFhZTliNDI3YmQ1N2Q5MWY2MjgwODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t880QLTi5t2fnLdJ6FyvWlL5Di0nab2_qY6xU45qnuM'


//api call을 준비하기 위한 axios 객체 생성
const tmbdApi = axios.create({
    baseURL: BASE_URL, //https://api.themoviedb.org/3
    headers: {
        accept: 'application/json', //json 형태로 response 데이터를 받겠다
        Authorization:AUTH_KEY //서버에 requst할 때 필요한 인증키
    }
    
})

//공통 API 호출 함수

const fetchFromApi = async (url, params = {}) => {
    try {
        const response = await tmbdApi.get(url, { params })
        return response
    } catch (error) {
        console.log(`API 요청 오류:${error.message}`)
    } //throw error
}

//인기,상영중,개봉 예정 영화 가져오기
export const getMovies = (category = 'popular', page = 1) => {
    //카테고리에 맞는 endpoint를 가져옴
    const endpoint = {
        popular: '/movie/popular',
        now_playing: '/movie/now_playing',
        upcoming:'/movie/upcoming'
    }[category]

    return fetchFromApi(endpoint, {
        language: 'ko-KR',
        page, // page:page 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
        region:'KR'
    })
}
 
//인기,방송 중인 tv 목록 가져오기
export const getTvs = (type, page = 1) => {
    //타입에 따라 앤드포인트 동적으로 설정
    const endpoint = {
        popular: '/tv/popular',
        on_the_air:'/tv/on_the_air'
    }[type]

    return fetchFromApi(endpoint, {
        language: 'ko-KR',
        page,
    })
 }

//영화 상세 정보 가져오기
export const getMovieDetails = (movieId) => { 
    return fetchFromApi(`/movie/${movieId}`, { language: 'ko-KR'})
}


//출연 배우 정보 가져오기
export const getMovieCredits = (movieId) => {
    return fetchFromApi(`/movie/${movieId}/credaits`, {language: 'ko-KR'})
 }


//영화검색 API 호출

export const searchMovie = (query, page = 1) => {
    return fetchFromApi('/search/movie', {
        query, //검색어
        include_adult: false,
        language: 'ko-KR',
        page,
        region:'KR'
    })
} 

export default tmbdApi