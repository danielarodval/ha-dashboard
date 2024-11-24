import React from 'react';
import { Button, Box } from '@mui/material';
import Layout from '../components/layouts/article';
import { Grid } from '@mui/material';

const Page = () => {
    const openUrl = (address) => {
        window.open(address, '_blank');
    };

    return (
        <Layout title='Apartment'>
            <Box mt={4} sx={{ flexGrow: 1, mx: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button onClick={() => {
                            openUrl('http://umbrel/')
                        }} variant="contained" fullWidth>
                            Umbrel
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Button onClick={() => {
                            openUrl('http://umbrel:8082/admin/')
                        }} variant="contained" fullWidth>
                            Pi-Hole
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Button onClick={() => {
                            openUrl('http://umbrel:9000/#!/home')
                        }} variant="contained" fullWidth>
                            Portainer
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default Page;

// <Button onClick={openUrl('http://umbrel/')} variant="contained">Umbrel</Button>