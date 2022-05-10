import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './PhaserGame';
import { Game } from './ui/Game';
import { Layout } from './ui/Layout/Layout';

ReactDOM.render(
   <React.StrictMode>
      <Layout>
         <Game />
      </Layout>
   </React.StrictMode>,
   document.getElementById('root'),
);
