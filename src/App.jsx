import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, HashRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import PageNotFound from './components/PageNotFound';
import MovieDetail from './components/MovieDetail';

const theme = createTheme();

function App(){

    return(
        <>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:imdbID" element={<MovieDetail />} />
                        <Route element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </ThemeProvider>
            </HashRouter>
        </>
    );
}

export default App;



