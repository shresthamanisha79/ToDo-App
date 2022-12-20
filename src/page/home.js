import React, {useState} from 'react'


const Homepage = () => {

    const [add, setAdd] = useState([])
    const [addItem, setAddItem] = useState()

    const handleChange = (e) =>{
        setAdd(e.target.value)
    }

    const addtoList = () =>{  
        
    }


    return(
        <div classname="homePage" style={{color:'white', backgroundColor:'grey', height: 500}}>
            <h1>To Do List</h1>
            <div className='inputItem'>
                <input classname="input"
                    onChange={()=>{handleChange()}} 
                    type="text"
                    placeholder="Type your todo list..." 
                    style={{height: 50, width: 400}}/>
                <button classname="button" 
                    onClick={()=>{addtoList()}}
                    style={{height: 57, width: 57}}>+
                </button>
            </div>

            
            
        </div>
            
        
    )

}

export default Homepage
