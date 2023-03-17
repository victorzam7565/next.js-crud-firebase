import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button'
import React, {useState} from 'react'



export const LinkForm=(props)=>{
const initialStateValues={
url:'',
name:'',
description:'',
}

const[values,setValues] = useState(initialStateValues);
    

const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setValues({...values,[name]:value})
    
}
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addOrEditLink(values);
    }


return (<> 
    <form className="card card-body" onSubmit={handleSubmit} >
<div className="input-group-text bg-ligth">
<h1>Insertar tu direccion aqui</h1>
<InsertLinkIcon/>
</div>

<div className="form-group" input-group>
<input type="text" className="form-control" placeholder="https://" name="url" onChange={handleInputChange}></input>
    </div>

<div className="form-group" input-group>
<div className="input-group-text bg-light">
    <h1>Crear tu nombre aqui</h1>
   <CreateIcon>Crear</CreateIcon>
</div>
<input type="text" className="form-control" name="name" placeholder="tu nombre aqui" 
onChange={handleInputChange}/>
    </div>


<div className="form-group">
  <textarea name="description" rows="3" className="form-control" placeholder="escribe una description"
  onChange={handleInputChange}></textarea>
</div>

<Button variant="contained" color="warning" onClick={handleSubmit}>
  Save
</Button>



    </form>
    </>
)

}
