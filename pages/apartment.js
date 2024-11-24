import React from 'react';
import { Box, Paper, Grid, Typography, Chip } from '@mui/material';
import Layout from '../components/layouts/article';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%', // Set a fixed height for the grid items
}));

const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const currentDay = new Date().getDay();

const Page = () => {
    const router = useRouter();

    const room_name = (() => {
        const room_name = router.pathname.substring(1);
        return room_name.charAt(0).toUpperCase() + room_name.slice(1);
    })();

    return (
        <Layout title={room_name}>
            <Box mt={4} sx={{ flexGrow: 1, mx: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} md={6}>
                        <Item>
                            <Typography variant="h4" component="h1" gutterBottom>
                                {date}
                            </Typography>

                            {daysOfWeek.map((day, index) => (
                                <Chip
                                    key={index}
                                    label={day}
                                    style={{
                                        backgroundColor: index === currentDay ? '#DBC4FB' : 'inherit',
                                        color: index === currentDay ? '#6200ee' : 'inherit'
                                    }}
                                />
                            ))}
                        </Item>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Item>Grid Item</Item>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Item>Grid Item</Item>
                    </Grid>
                    <Grid item xs={8} md={12}>
                        <Item>Grid Item Large</Item>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default Page;