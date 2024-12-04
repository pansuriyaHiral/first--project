import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1a1a19', color: 'white', p: 2, }}>
                <Box sx={{
                    my: 2, "& svg":
                        { fontSize: '60px', cursor: 'pointer', mr: '3' },
                    "& svg:hover": { color: 'Red', transform: 'translatex(5px)', transition: 'all 400ms', }

                }}>
                    <InstagramIcon />

                    <TwitterIcon />
                    <FacebookIcon />
                    <YouTubeIcon />

                </Box>
                <Typography variant='h5' sx={{ '@media (mix-width:600px)': { fontSize: '1rem' } }}>
                    All Rights Reserved &copy; Techinfo YT
                </Typography>

            </Box>
        </>
    )
}

export default Footer;