import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@mui/material"


const Main = ({ children, router }) => {
    return (
        <Box as="main" bg="gray.100" sx={{ pb: 8 }}>
            <Head>
                <meta name = "viewport" content = "initial-scale=1.0, width=device-width" />
                <title>My App</title>
            </Head>

            <NavBar path={router.pathname} />

            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>

        </Box>
    );
}

export default Main