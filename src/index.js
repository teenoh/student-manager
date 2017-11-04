import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { BrowserRouter} from "react-router-dom";


const Index = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);