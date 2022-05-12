import { CssBaseline, ThemeProvider } from '@mui/material';
import { GridEngine } from 'grid-engine';
import React from 'react';
import ReactDOM from 'react-dom';
import './game/PhaserGame';
import { theme } from './theme';
import { Game } from './ui/Game';
import { Layout } from './ui/layout/Layout';

declare global {
   namespace Phaser {
      export class CustomScene extends Phaser.Scene {
         gridEngine: GridEngine;
      }
   }
}

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
