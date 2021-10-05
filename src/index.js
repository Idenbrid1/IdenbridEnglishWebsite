import {React,} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/@lottiefiles/lottie-player/dist/lottie-player';
import '../node_modules/@glidejs/glide/dist/glide.esm';
import '../node_modules/jquery/dist/jquery';
import './index.min.css';
import App from "./app/App";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("Idenbrid-appMountPoint")
);