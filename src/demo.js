import React from 'react';
import './App.css';

function demo() {
    
var header = document.createElement('h1');
header.innerHTML = 'Hello JSX';

const list = () =>{
    const element = [ "A","B","C"];   

   return(
       <div>
           <h2>Alphabets</h2>
           <ul>
               {
                element.map(item=>
                    <li className="element">item</li>    
                )}
           </ul>
       </div>
   )
}


};

export default demo;

