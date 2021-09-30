import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const rootElement = document.createElement('div');
  ReactDOM.render(
      <App />,
    rootElement);
  ReactDOM.unmountComponentAtNode(rootElement);
});
