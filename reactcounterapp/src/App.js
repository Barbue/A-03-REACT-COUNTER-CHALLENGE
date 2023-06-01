//import logo from './logo.svg';
import "./App.css";
import React from "react";
import CounterButton from "./components/CounterButton";
//let tableRow = document.querySelector('tr')
//let dataCell = document.querySelector('td')

function App() {
  return (
    <div className="App">
      <h5>LOGO</h5>
      <h6>menu</h6>

      <br />

      <CounterButton />

      {/* <CounterButton 
    name = "add 1"
    num = {num}
    setNum = {setNum}
    star ={star}
    
    
    
    />

   <CounterButton 
    name = "remove 1"
    num = {num}
    setNum = {setNum}
    star = {star}
    
    
    
    /> */}
    </div>
  );
}

export default App;

/* <table>
<tbody>
<tr id="row">

</tr>
</tbody>
</table>  */
