const jsElement = document.createElement('h1');
jsElement.innerHTML = 'Hello react from pure JS';
const jsRoot = document.getElementById('pure-js');
jsRoot.appendChild(jsElement);

// React code to inject new element in the react js html div

const reactNode = React.createElement('div', {}, [
  React.createElement(
    'div',
    {},
    React.createElement('h1', { id: 'div1' }, 'hello div 1')
  ),
  React.createElement(
    'div',
    {},
    React.createElement('h1', { id: 'div2' }, 'hello div 2')
  ),
]);
const root = ReactDOM.createRoot(document.getElementById('react-js'));
root.render(reactNode);
