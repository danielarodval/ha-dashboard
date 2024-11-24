import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { LocalHotelRounded, LocationCityRounded, WeekendRounded, KitchenRounded, MonitorRounded } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    //functions to determine if the tab is active
    const isActive = (route) => {
        return route === router.pathname;
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography sx={{color:'white', fontWeight: 'bold'}}>
                    Home Assistant Dashboard
                </Typography>
            </Toolbar>

            <Toolbar>
                <Tabs sx={{ flexGrow: 1 }} variant="fullWidth" value={router.pathname}>
                    <Tab component={Link} href='/apartment' icon={<LocationCityRounded/>} label="Apartment" sx={{ color: isActive('/apartment') ? 'white' : '#c099f8' }} />

                    <Tab component={Link} href='/bedroom' icon={<LocalHotelRounded/>} label="Bedroom" sx={{ color: isActive('/bedroom') ? 'white' : '#c099f8' }} />

                    <Tab component={Link} href='/livingroom' icon={<WeekendRounded/>} label="Living Room" sx={{ color: isActive('/livingroom') ? 'white' : '#c099f8' }} />

                    <Tab component={Link} href='/kitchen' icon={<KitchenRounded/>} label="Kitchen" sx={{ color: isActive('/kitchen') ? 'white' : '#c099f8' }} />

                    <Tab component={Link} href='/office' icon={<MonitorRounded/>} label="Office" sx={{ color: isActive('/office') ? 'white' : '#c099f8' }} />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

//label={isActive('/') ? "yes" : "no"}