import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'

//createAsynThunk():영화 목록을 ApI로부터 가져온다(비동기 액션 처리)
//createAsyncThunk(액션의 타입명 지정, 비동기 함수로 api 호출)
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => { 
    const response = await getMovies()
    return response.data.results
})
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: false, //로딩상태
        movies: [],
        error:null,
    },
    reducers: {},
    //extraReducers:비동기 액션의 각 state를 업데이트
    //비동기 통신에 대한 액션은 createAsyncThunk가 해줌
    //비동기 액션은 아래와 같이 크게 세 개로 나눠짐
    extraReducers: (builder) => {
        builder
            //데이터를 가져오는 동안
            .addCase(fetchMovies.pending, (state) => {
                state.loading=true
             })
        //데이터를 성공적으로 가져오는 경우
            .addCase(fetchMovies.fulfilled, (state,action) => {
                state.loading = false
                state.movies = action.payload //비동기 통신 결과(영화 목록)
             })
        //데이터 가져오기를 실패할 경우(api 호출 과정에서 문제)
            .addCase(fetchMovies.rejected, (state, action) => { 
                state.loading = false
                state.error = action.error.message //에러메세지
            })
     }
})

export default movieSlice.reducer