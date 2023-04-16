import React from "react"
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,
    Stack, Box, Toolbar, Typography, Container,  } from "@mui/material";
    
function Footer() {
    return (
        <>
            <Box sx={{ bgcolor: 'background.paper', p: 3 ,marginTop:"10px"}} component="footer">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Copyright @2023
                </Typography>
                {/* <Copyright /> */}
            </Box>
        </>
    );
}

export default Footer;