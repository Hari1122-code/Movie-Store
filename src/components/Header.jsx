import React from "react"
import { AppBar, Button, CssBaseline, Stack, Box, Toolbar, Typography,  } from "@mui/material";
import { HashLink } from "react-router-hash-link";
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
              <HashLink to="#movies"><Button variant="contained">Movies</Button></HashLink>
              <HashLink to="#shows"><Button variant="contained">Shows</Button></HashLink>
            </Stack>
            </Toolbar>
            </AppBar>
            
        </>
    );
}

export default Header;