import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer  from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Update } from './MyComponents/Update';

function App() {  
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //Update todo
  const onUpdate = (todo) =>{
    console.log('Todo Updated',todo);

  setTodos(todos.onUpdate((e) => {
      return e!==todo;
  }));
  console.log("Todo Deleted Success",todos);
  localStorage.setItem("todos",JSON.stringify(todos));
  }
  

  //Delete todo
  const onDelete = (todo) =>{
    console.log('Delete Click',todo);

  setTodos(todos.filter((e) => {
      return e!==todo;
  }));
  console.log("Todo Deleted Success",todos);
  localStorage.setItem("todos",JSON.stringify(todos));
}




  //Add todo

  const addTodo = (name,desc) =>{ 
    console.log('todo added', name , desc)
    let no;
    if(todos.length === 0){
      no=1;
    }
    else{
      no = todos[todos.length - 1 ].no + 1;
    }

    const myTodo= {
      no:no,
      name:name,
      desc:desc
    }
    setTodos([...todos , myTodo]);
    console.log(myTodo);
  }

const  [todos, setTodos] = useState(initTodo);
  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
},[todos])
   


  return(
    <>
    <Router>
      <Header  title='My TODO' searchbar ={true} />
        <Switch>

        <Route exact path="/" render={()=>{
          return(  
            <>
             <div className="container col-md-12 row">
                   <div className="col-md-6 d-inline-block">
                      <AddTodo addTodo={addTodo} />                      
                   </div>
                   <div className="col-md-6 d-inline-block">
                        <Todos  todos={todos} onDelete={onDelete}  onUpdate={onUpdate}/>
                   </div>
              </div>
            </>
          )
        }}>
        </Route>
        
        <Route exact path="/about" >
         <About />
        </Route>
      
      </Switch>
        
        <Footer />
    
    </Router>
    </>
  );
}

export default App;
