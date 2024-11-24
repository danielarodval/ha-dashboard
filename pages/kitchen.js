import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/layouts/article';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();

    const room_name = (() => {
        const room_name = router.pathname.substring(1);
        return room_name.charAt(0).toUpperCase() + room_name.slice(1);
    })();

    return (
        <Layout title={room_name}>
            {router.pathname}
        </Layout>
    );
};

export default Page;