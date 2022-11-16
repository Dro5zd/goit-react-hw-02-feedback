import React from 'react';
import ReactDOM from 'react-dom/client';
import {FeedbackApp} from './FeedbackApp';
import {Global} from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FeedbackApp />
    <Global />
  </React.StrictMode>
);

