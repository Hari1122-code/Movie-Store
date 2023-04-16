import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,
Stack, Box, Toolbar, Typography, Container,  } from "@mui/material";

// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PageNotFound from './components/PageNotFound';
import MovieDetail from './components/MovieDetail';

const theme = createTheme();

function App(){

    return(
        <>
            <Router>
            <ThemeProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:imdbID" element={<MovieDetail/>} />
                    <Route element={<PageNotFound/>} />
                </Routes>
                <Footer />
            </ThemeProvider>
            </Router>
        </>
    );
}

export default App;



