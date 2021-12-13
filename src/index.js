import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {NotesProvider, ThemeProvider} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);