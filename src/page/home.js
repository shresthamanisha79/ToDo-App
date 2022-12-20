import React, {useState} from 'react'
import Card from '../components/card'
import {FaPlus} from "react-icons/fa"
import '../App.css'


const Homepage = () => {

    const [inputItem, setInputItem] = useState('')
    const [items, setItems] = useState([])

    const handleChange = (e) =>{
        setInputItem(e.target.value)
    }

    const addtoList = () =>{  
        if(inputItem){
            setItems([...items, inputItem])
            setInputItem('')
        }else{
            alert("List cannot be empty")
        }
    }

    const delItem = (a) =>{
        console.log(a)
        const filterItem = items.filter((item, id)=>{
            if(a !== id){
                return item
            }
        })
        setItems(filterItem)
    }


    return(
        <div className="homePage" style={{ backgroundColor:'#e7e7e7', height: 600}}>
            <h1 style={{color:'#7cabb5'}}>To Do List</h1>
            <div className='inputItem'>
                <input className="input"
                    onChange={(e)=>{handleChange(e)}} 
                    value={inputItem}
                    type="text"
                    placeholder="Enter your todo list..." 
                    style={{height: 50, width: 400, backgroundColor:'#f0f0f0', marginBottom:15, fontSize:20}}/>
                <FaPlus className="button" 
                    onClick={()=>{addtoList()}}
                    style={{height: 20, width: 20}}
                />
                {items.map((item, id)=>{
                    return(<Card item={item} delItem={()=>{delItem(id)}}/>)
                })}
            </div>

            
            
        </div>
            
        
    )

}

export default Homepage
