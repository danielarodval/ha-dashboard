import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#6200ee',
    },
    secondary: {
      main: '#00e676', // Define your application's secondary color
    },
  },
  typography: {
    fontSize: 14, // Define the default font size
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Define the default font family
  },
  spacing: 4, // The base spacing value. 4px by default.
});


export default theme;
