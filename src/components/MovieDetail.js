import React, { useEffect } from "react"
import {Card, CardMedia, Grid,
  Typography, Container
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsyncMovieDetail, getSelectedMovie } from "../Redux/Store";
// import {selectedMovie,removeSelectedMovie} from "../Redux/Store";
import { removeSelectedMovie } from "../Redux/Store";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector(getSelectedMovie);
  console.log(movieDetail)
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    }
  }, [dispatch, imdbID]);

  return (
    <>
      <Container sx={{ py: 0, boxShadow: 10, borderRadius: "10px", marginTop: "30px", padding: "5px" }} maxWidth="lg">
        {/* {Object.keys(movieDetail).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <> */}
            <Grid container spacing={0}>
              <Grid item xs={4} sx={{ padding: "10px" }}>
                <Card
                  sx={{ height: '100%', }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%', paddingTop: '0'
                    }}
                    image={movieDetail.Poster}
                    alt="random"
                  />
                </Card>

              </Grid>
              <Grid item xs={8} sx={{ padding: "20px" }}>
                <Typography gutterBottom variant="h4" >
                  {movieDetail.Title}
                </Typography>
                <Typography variant="h7" sx={{ color: "gray" }}>
                  IMDB Rating: {movieDetail.imdbRating} IMDB Votes: {movieDetail.imdbVotes} Runtime: {movieDetail.Runtime} Year: {movieDetail.Year}
                </Typography>
                <br /><br />
                <Typography>
                  {movieDetail.Plot}
                </Typography>
                <br />
                <Typography>
                  Director: {movieDetail.Director}
                </Typography>
                <Typography>
                  Stars: {movieDetail.Actors}
                </Typography>
                <Typography>
                  Generes: {movieDetail.Genre}
                </Typography>
                <Typography>
                  Languages: {movieDetail.Language}
                </Typography>
                <Typography>
                  Awards: {movieDetail.Awards}
                </Typography>
              </Grid>
            </Grid>
          {/* </>
          )} */}
         </Container>
    </>
  );
}

export default MovieDetail;