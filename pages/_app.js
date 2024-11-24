import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../lib/theme';
import Layout from '../components/layouts/main';
import { AnimatePresence } from 'framer-motion';

const Website = ({Component, pageProps, router }) => {
    return (
        <ThemeProvider theme = {theme}>
            <CssBaseline />
            
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
            
        </ThemeProvider>
    );
}

export default Website;