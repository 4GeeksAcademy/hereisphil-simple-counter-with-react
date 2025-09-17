import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//CSS
import "../index.css"

// components
import Home from './components/Home';

// THIS IS THE OLD WAY:
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )
// RE-DO IT THE MODERN REACT 18+ WAY BY:
// Creating the root once
const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
// Then calling render on that root
setInterval(() => {
  const sixthDigit = Math.floor(counter/100000);
  const fifthDigit = Math.floor(counter/10000);
  const fourthDigit = Math.floor(counter/1000);
  const thirdDigit = Math.floor(counter/100);
  const secondDigit = Math.floor(counter/10);
  const firstDigit = Math.floor(counter);
  counter++

  // render the react app with passed props
  root.render(
  <React.StrictMode>
    <Home 
    digitOne={firstDigit} 
    digitTwo={secondDigit} 
    digitThree={thirdDigit} 
    digitFour={fourthDigit} 
    digitFive={fifthDigit} 
    digitSix={sixthDigit} 
    />
  </React.StrictMode>
);
}, 1000);