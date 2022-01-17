import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import Calculator from './page/Calculator';
import Home from './page/Home';
import Quote from './page/Quote';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <ul className="menu">
      <span className="logo">Math Magicians</span>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
