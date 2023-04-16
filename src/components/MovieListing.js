import React from "react";
import { Link } from "react-router-dom";
import {
  Card, CardContent, CardMedia, Grid,
  Box, Typography, Container, CardActionArea
} from "@mui/material";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../Redux/Store";


function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="xl">

        <Box id="movies" sx={{paddingTop:"20px"}}>
        <Typography variant="h4" >Movies</Typography>
        {movies.Response === "True" && (


          <Grid container spacing={4}>

            {movies.Search.map((movie, index) => (
              <Grid item key={index} xs={6} sm={6} md={4} lg={2}>
                <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: "5px" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '56.25%', paddingTop: '0'
                        }}
                        image={movie.Poster}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {movie.Title}
                        </Typography>
                        <Typography>
                          {movie.Year}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}


        </Box>
        <Box id="shows" sx={{paddingTop:"20px"}}>

         
        <Typography variant="h4" >Shows</Typography>
        {shows.Response === "True" && (
          
          
          <Grid container spacing={4}>

            {shows.Search.map((movie,index) => (
              <Grid  item key={index} xs={12} sm={6} md={4} lg={2}>
              <Link to={`/movie/${movie.imdbID}`} style={{textDecoration: 'none'}}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: "5px" }}
              >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '56.25%', paddingTop: '0'
                  }}
                  image={movie.Poster}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                  </Typography>
                  <Typography>
                    {movie.Year}
                  </Typography>
                </CardContent>
        </CardActionArea>
              </Card>
            </Link>
              </Grid>
            ))}
          </Grid>
          )}
          </Box>
      </Container>
    </>
  );
}

export default MovieListing;