import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp.jsx';

import  "./style.css"; // To have globally the styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)




// npm run build - To generate dist file
// https://www.netlify.com/ : Si no tiene back end podemos desplegarla aquí de manera gratuita