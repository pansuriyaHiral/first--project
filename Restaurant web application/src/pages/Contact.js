import React from 'react';
import Layout from '../components/Layout.js';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 10, ml: 10, "& h5": { fontWeight: 'bold', mb: 2 } }}>
                <Typography variant='h5'>
                    Contact My Resturant
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod neque aliquid pariatur possimus consequatur minima, velit nisi iste omnis libero! Laborum iste, in enim tempore placeat praesentium minima commodi, suscipit molestias doloribus maxime pariatur assumenda ipsam debitis eaque repellendus dolore corrupti similique nisi. Ab ipsum architecto numquam aliquid dolores.
                </p>
            </Box>
            <Box sx={{
                m: 3, width: "600px", ml: 10, "@media (max-width:600px )": {
                    width: "300px",
                }
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact-table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} />1800-00-0098(tollfree)
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "blue", pt: 1 }} />help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} />6578905434
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>

        </Layout>
    )
}

export default Contact;
