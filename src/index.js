// @ts-check

// import 'core-js/stable/index.js';
// import 'regenerator-runtime/runtime.js';

// import '../assets/application.scss';

// if (process.env.NODE_ENV !== 'production') {
//   localStorage.debug = 'chat:*';
// }

// const p = document.createElement('p');
// p.classList.add('card-text');
// p.textContent = 'It works!';

// const h5 = document.createElement('h5');
// h5.classList.add('card-title');
// h5.textContent = 'Project frontend l4 boilerplate';

// const cardBody = document.createElement('div');
// cardBody.classList.add('card-body');
// cardBody.append(h5, p);

// const card = document.createElement('div');
// card.classList.add('card', 'text-center');
// card.append(cardBody);

// const container = document.querySelector('#chat');
// container.append(card);

// console.log('it works!');

import React from 'react';
import ReactDOM from 'react-dom';
// // import './index.css';
import App from './components/App.jsx';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux'; // импорт компонента!
// import { createStore } from 'redux';
// import reducers from './reducers.jsx'


// const store = createStore(reducers);

ReactDOM.render(
    <App />,
  document.getElementById('chat')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();