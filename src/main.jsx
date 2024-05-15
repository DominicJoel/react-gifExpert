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
// https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177 : To configure test environment with yarn
// https://shard-pull-4e1.notion.site/Day-15-of-100daysofcode-b4f62b40aa804d5b91d6ecfcc5a761f6: To configure test environment with npm