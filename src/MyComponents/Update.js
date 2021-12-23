import React from 'react'

export const Update = ({addTodo}) => {


    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if(!name || !desc){
            alert("name or  description is empty");
        }
        else{
            addTodo(name,desc);
            setDesc (" ");
            setName (" ");
           

        } 
        //console.log(submit(name,desc))
    }


    return (
                
        <div className="container my-3 align-left ">
            <form onSubmit={submit}>
                <h4>Add Todo</h4>
                <div className="mb-3">
                    <label htmlFor="name" className="form-name">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control"  desc={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

     
