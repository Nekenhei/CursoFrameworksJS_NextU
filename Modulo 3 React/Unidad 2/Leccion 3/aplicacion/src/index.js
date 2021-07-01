import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contador from './components/contador/contador'
import Barra from './components/barra/barra'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'

ReactDOM.render(
<ErrorBoundary>
    <Contador />
</ErrorBoundary>, document.getElementById("contador")
);

ReactDOM.render(<ErrorBoundary><Barra/></ErrorBoundary>, document.getElementById("barra"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
