import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/@lottiefiles/lottie-player/dist/lottie-player';
import '../node_modules/@glidejs/glide/dist/glide.esm';
import '../node_modules/jquery/dist/jquery';
import './index.min.css';

ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("Idenbrid-appMountPoint")
);