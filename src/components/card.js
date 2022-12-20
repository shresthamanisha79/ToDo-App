import React from 'react'
import {FaTrashAlt} from "react-icons/fa"
import '../App.css'

const Card = (props) => {

    const deleteItem = () =>{
        props.delItem()
    }


    return(
        <div className="main-card-div">
            <h3 style={{backgroundColor: '#7cabb5', color: 'white', display:'flex', justifyContent:"space-between", width:500, height:50, margin:'auto', marginBottom:20}}>
                {props.item} 
                <FaTrashAlt onClick={()=>{deleteItem()}} style={{color:'white', marginTop:12, float:"right"}}/>
            </h3>
            
        </div>
    )
}
export default Card