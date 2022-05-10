import { createTheme } from '@mui/material';

export const theme = createTheme({
   components: {
      MuiCssBaseline: {
         styleOverrides: {
            body: {
               margin: 0,
               padding: 0,
               overflow: 'hidden',
            },
         },
      },
   },
});
