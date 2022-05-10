import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import './game/PhaserGame';
import { theme } from './theme';
import { Game } from './ui/Game';
import { Layout } from './ui/Layout/Layout';

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Layout>
            <Game />
         </Layout>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);
