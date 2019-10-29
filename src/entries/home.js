import React from "react";
import { render } from "react-dom";
// import Playlist from './src/playlist/components/playlist';
import Home from "../pages/containers/home";
import data from "../api.json";

const app = document.getElementById("home-container");

const holaMundo = <h1>Hola Mundo de React JS!!</h1>;

render(<Home data={data} />, app);
