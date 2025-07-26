import React from 'react';
import ReactDOM from 'react-dom/client';
const jsElement = document.createElement('h1');
jsElement.innerHTML = 'Hello react from pure JS';
const jsRoot = document.getElementById('pure-js');
jsRoot.appendChild(jsElement);

// React code to inject new element in the react js html div

const reactNode = React.createElement('div', { id: 'div3', key: 1 }, [
  React.createElement(
    'div',
    { key: 4 },
    React.createElement('h1', { key: 2 }, 'hello div 1')
  ),
  React.createElement(
    'div',
    { key: 5 },
    React.createElement('h1', { key: 3 }, 'hello div 2')
  ),
]);
const root = ReactDOM.createRoot(document.getElementById('react-js'));
root.render(reactNode);
