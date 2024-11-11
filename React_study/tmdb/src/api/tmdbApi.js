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


//인기 영화목록 가져오는 함수
//getMovies 함수를 외부에서 사용하기 위해 export 키워드 작성
export const getMovies = async (page = 1) => { 
    const response = await tmbdApi.get('/movie/popular', {
        params: {
            language: 'ko-KR',
            page,//page: page, 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
            region:'KR'
        }
    }) //서버에 read 요청,get이랑 patch랑 같다고 생각..

    return response //서버에 요청이 다 끝난 후에 결과데이터를 return
} 

export default tmbdApi