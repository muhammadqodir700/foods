// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import  'bootstrap/dist/css/bootstrap.min.css';
// import './sass/main.scss'
// import Our from "./components/our";
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
 import './components/i18n.js'
import Test from "./components/test";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="...loading">
            <Test />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

