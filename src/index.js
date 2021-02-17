import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NotesContextComponent} from './NotesContext';

ReactDOM.render(
  <React.StrictMode>
    <NotesContextComponent>
      <App />
    </NotesContextComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

