import React, {useEffect,useState} from "react"
import { Button, Box, Typography, Container,TextField  } from "@mui/material";
// import MovieApi from "../apis/MovieApi";
// import { ApiKey } from "../apis/MovieApiKey";

import MovieListing from "./MovieListing"
import { useDispatch } from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows} from "../Redux/Store";
// import {selectedMovie,removeSelectedMovie} from "../Redux/Store";

function Home(){
  // const movieText="Harry";
  const dispatch = useDispatch();
  console.log("hi")
  const [search,setSearch ]= useState("Harry");

  useEffect(()=> {
    const fetchMovies = async ()=> {
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncShows(search));
    };
    fetchMovies();
  },[dispatch,search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    setSearch(details.get('movieName'));
    console.log(details.get('movieName'))
  };


    return(
        <>
         <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Movie Store
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Search for all your favorite movies and shows here...
            </Typography>

            <Box component="form"  onSubmit={handleSubmit} sx={{display:"flex",direction:"row",justifyContent:"center",gap:"5px"}}
              >
            <TextField fullWidth name="movieName" placeholder="Type here..." id="outlined-multiline-flexible" />
              <Button variant="contained" type="submit">Search</Button>

            </Box>
          </Container>
        </Box>
         <MovieListing />
        </>
    );
}

export default Home;