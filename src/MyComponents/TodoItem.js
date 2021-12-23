import React from 'react'

export const TodoItem = ({todo, onDelete,onUpdate}) => {
    return (
        <div className="container">
            <div>
                <h3>{todo.no} |  {todo.name}</h3>
                <p>{todo.desc}</p>
                <button className="btn btn-warning btn-sm" onClick={(props)=>{onUpdate(todo)}}>Update</button><br /><br /> 
                <button className="btn btn-danger btn-sm" onClick={(props)=>{onDelete(todo)}}>Delete</button><br /><br />   
            </div>
        </div>
        
    )
}
