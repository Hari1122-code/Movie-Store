import { configureStore, createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../apis/MovieApi";
const ApiKey = process.env.REACT_APP_API_KEY

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (search) =>{
    const response = await MovieApi.get(`?apikey=${ApiKey}&s=${search}&type=movie`)
      return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (search) =>{
    const response = await MovieApi.get(`?apikey=${ApiKey}&s=${search}&type=series`)
      return response.data;
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) =>{
    const response = await MovieApi.get(`?apikey=${ApiKey}&i=${id}&plot=full`)
        return response.data;
})

const initialState = {
    movies : {},
    shows : {},
    selectedMovie : {},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovie:(state)=>{
            state.selectedMovie = {};
        },  
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectedMovie: payload };
        },
        [fetchAsyncShows.pending]: () => {
        console.log("Pending");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, shows: payload };
        },
        [fetchAsyncShows.rejected]: () => {
        console.log("Rejected!");
        },
    },
});

export const {removeSelectedMovie} = movieSlice.actions;
export const getAllMovies =(state)=> state.movies.movies;
export const getAllShows =(state)=> state.movies.shows;
export const getSelectedMovie =(state)=> state.movies.selectedMovie;


export const store = configureStore({
    reducer: combineReducers({
        movies: movieSlice.reducer,
    })
})

