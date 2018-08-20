import React from 'react';
import {hot} from "react-hot-loader";
import { render } from 'react-dom';
import App from './components/App';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';


render(<App />, document.getElementById('main'));