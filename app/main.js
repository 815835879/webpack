// const greeter = require("./greeter.js");
// document.querySelector("#root").appendChild(greeter());
import React from 'react'
import {render} from 'react-dom'
import Greeter from './greeter'
import './main.css'

render(<Greeter />,document.getElementById('root'));