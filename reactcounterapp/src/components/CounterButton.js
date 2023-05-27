import React from 'react';
import { useState } from 'react';
//let table = document.querySelector('table')
let tableRow = document.querySelector('tr')
let dataCell = document.querySelector('td')

const CounterButton = (props) => {

const [counter, setCounter] = useState(0);



 
const handleIncrease = () => {

    

    let newTd = document.createElement('td');
   
    newTd.innerHTML = '&#9733'   //&#9733 ★
    
    tableRow.appendChild(newTd)
  

  
    

    if (counter >= 5){tableRow.deleteCell(dataCell)}
    if (counter >= 5) { return }

    setCounter(counter + 1)
    
    
}


const handleDecrease = () => {

  if (counter >= 1) {setCounter(counter - 1)
     tableRow.deleteCell(dataCell)
  }
     return
  }

     return (
      
       <>
      <button id='one' onClick={() => handleIncrease()}>add 1</button>
      <button id='two' onClick={() => handleDecrease()}>remove 1</button>

      <h3>{counter}</h3>

      <table>
        <tbody>
       <tr id="row">
     
       </tr>
       </tbody>
      </table> 
    
      </>
      
  )
  }
  
  export default CounterButton