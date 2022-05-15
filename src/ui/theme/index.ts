import { createTheme } from '@mui/material';

export const theme = createTheme({
   components: {
      MuiCssBaseline: {
         styleOverrides: {
            html: {
               margin: 0,
               padding: 0,
               boxSizing: 'content-box',
            },
            body: {
               margin: 0,
               padding: 0,
               overflow: 'hidden',
               background: '#48C4F8',
               boxSizing: 'content-box',
            },
            '*::-webkit-scrollbar': {
               width: 8,
            },
            '&::-webkit-scrollbar-thumb': {
               backgroundColor: '#D8D8D8',
            },
            '*:hover': {
               '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#D8D8D8',
               },
            },
            '*:hover::-webkit-scrollbar-thumb': {
               backgroundColor: '#D8D8D8',
            },
         },
      },
   },
});
