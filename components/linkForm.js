import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button'
import React, {useState,useEffect} from 'react'
import { db } from "@/firebase/firebase"


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
        setValues({...initialStateValues})
    }
 
    const getLinkById =async (id) =>{
    const doc = await    db.collection("links").doc(id).get();
    setValues({...doc.data()})
    }



useEffect(()=>{
    console.log(props.currentId)
 if(props.currentId === ''){
    setValues({...initialStateValues});
 }else{
    getLinkById(props.currentId);
 }
},[props.currentId]);



return (<> 
    <form className="card card-body" onSubmit={handleSubmit} >
<div className="input-group-text bg-ligth">
<h1> Tu direccion aqui</h1>
<InsertLinkIcon/>
</div>

<div className="form-group" input-group>
<input type="text" className="form-control" placeholder="https://" name="url" onChange={handleInputChange} value={values.url}></input>
    </div>

<div className="form-group" input-group>
<div className="input-group-text bg-light">
    <h1> tu nombre aqui</h1>
   <CreateIcon>Crear</CreateIcon>
</div>
<input type="text" className="form-control" name="name" placeholder="tu nombre aqui" 
onChange={handleInputChange} value={values.name}/>
    </div>


<div className="form-group">
<textarea name="description" rows="3" className="form-control" placeholder="escribe una description"
  onChange={handleInputChange} value={values.description}></textarea>
</div>

<Button variant="contained" color="warning" onClick={handleSubmit}>
  {props.currentId === '' ?'Guardar':'actualizar'}
</Button>



    </form>
    </>
)

}
