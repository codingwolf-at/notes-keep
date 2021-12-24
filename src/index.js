import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {NotesProvider, ThemeProvider} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <App />
        </Router>
      </NotesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);