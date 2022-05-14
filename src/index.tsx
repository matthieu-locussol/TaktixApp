import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import './game/PhaserGame';
import { StoreProvider } from './store';
import { theme } from './theme';
import { Game } from './ui/Game';
import { Layout } from './ui/layout/Layout';

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <StoreProvider>
            <CssBaseline />
            <Layout>
               <Game />
            </Layout>
         </StoreProvider>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);
