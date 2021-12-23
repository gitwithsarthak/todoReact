import React from 'react';
import { TodoItem } from './TodoItem';
 
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-right">Todo Item</h3>
           
            {
              props.todos.length===0 ? " Empty Todos ":
              props.todos.map((todo) => {
                     console.log(todo.no)
                     return   <TodoItem todo={todo} key={todo.no} onDelete={props.onDelete} />  
                })
            }

        </div>
    )
}
