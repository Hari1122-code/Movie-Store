import React from "react"
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,
    Stack, Box, Toolbar, Typography, Container,  } from "@mui/material";
import SlideshowIcon from '@mui/icons-material/Slideshow';

function Header(){

    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
            <Toolbar sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <SlideshowIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                 Movie Store
                </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="#movies">Movies</Button>
              <Button variant="contained" href="#shows">Shows</Button>
            </Stack>
            </Toolbar>
            </AppBar>
            
        </>
    );
}

export default Header;