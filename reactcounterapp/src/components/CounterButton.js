import React from "react";
import { useState } from "react";
//let table = document.querySelector('table')
//let tableRow = document.querySelector("tr");
//let dataCell = document.querySelector("td");

const CounterButton = (props) => {
  const [counter, setCounter] = useState(0);

  const [stars, setStars] = useState();

  const handleIncrease = () => {
    if (counter === 0) {
      setCounter(1);
      setStars("★");
    }
    if (counter === 1) {
      setCounter(2);
      setStars("★★");
    }
    if (counter === 2) {
      setCounter(3);
      setStars("★★★");
    }
    if (counter === 3) {
      setCounter(4);
      setStars("★★★★");
    }
    if (counter === 4) {
      setCounter(5);
      setStars("★★★★★");
    }
    if (counter >= 5) {
      setCounter(5);
      setStars("★★★★★");
    }
  };

  const handleDecrease = () => {
    if (counter === 5) {
      setStars("★★★★");
    }
    if (counter === 4) {
      setStars("★★★");
    }
    if (counter === 3) {
      setStars("★★");
    }
    if (counter === 2) {
      setStars("★");
    }
    if (counter === 1) {
      setStars(" ");
    }

    if (counter >= 1) {
      setCounter(counter - 1);
    }
    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <button id="one" onClick={() => handleIncrease()}>
        add 1
      </button>
      <button id="two" onClick={() => handleDecrease()}>
        remove 1
      </button>

      <h3>{counter}</h3>
      <p>{stars}</p>
    </>
  );
};

export default CounterButton;




















//setStars(stars + star)
//console.log(stars)

//  let newTd = document.createElement('td');

//  newTd.innerHTML = '&#9733'   //&#9733 ★

//  tableRow.appendChild(newTd)
//  tableRow.insertCell(newTd)

//setCounter(counter + 1);

//tableRow.deleteCell(dataCell)
