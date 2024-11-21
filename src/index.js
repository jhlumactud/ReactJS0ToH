import React from "react";
import ReactDOM from "react-dom/client";

let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

let myText = {name:"Juan"};

function printName(){
  return "JuanSnow";
}

function App(){
  return (
        <>
            <h1 style={{color: 'darkgray', backgroundColor: 'cyan'}}>JohnSnow ™, {printName()}</h1>
            <h2 className="name">JuanDadi</h2>
            <label htmlFor="fName">First Name</label>
            <input name="fName" maxLength={5} autoFocus={true} placeholder="Enter your name"/>
        </>
  ) 
        
}

root.render(<App />);
