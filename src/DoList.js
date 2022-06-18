import { useState } from "react";


const DoList = ({lists}) => {
    
    const [newlist,setNewLists]=useState(lists);
    

    const handleDelete = (id) => {
        fetch('http://localhost:7000/lists/'+id, {
            method: 'DELETE'
        }).then(() =>{
           
            setNewLists(newlist.filter((l)=>l.id !== id));
        });
    }
    return (
        <div className="doList">
            {newlist && newlist.map((list) =>
                <div className='list-preview' key={list.id}>
                    
                        <h2>{ list.body }</h2>
                        <button onClick={() => handleDelete(list.id)}>Complete</button>
                    
                    
                </div> 
            )}
        </div>
    );
}
 
export default DoList;