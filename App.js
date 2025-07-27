import ReactDOM from 'react-dom/client';

// React Element
const Title = () => <h1>Hello World from JSX</h1>;

// React Component
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* // All of the below are the ways to render component */}
      {Title()}
      <Title />
      <Title></Title>
      <h1>This is React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent></HeadingComponent>);
