import React, {useState} from 'react'


const Homepage = () => {

    const [inputItem, setInputItem] = useState('')
    const [addItem, setAddItem] = useState([])

    const handleChange = (e) =>{
        setInputItem(e.target.value)
    }

    const addtoList = () =>{  
        if(inputItem){
            setAddItem([...addItem, inputItem])
            setInputItem('')
        }else{
            alert("List cannot be empty")
        }
    }


    return(
        <div classname="homePage" style={{color:'white', backgroundColor:'grey', height: 500}}>
            <h1>To Do List</h1>
            <div className='inputItem'>
                <input classname="input"
                    onChange={(e)=>{handleChange(e)}} 
                    value={inputItem}
                    type="text"
                    placeholder="Type your todo list..." 
                    style={{height: 50, width: 400}}/>
                <button classname="button" 
                    onClick={()=>{addtoList()}}
                    style={{height: 57, width: 57}}>+
                </button>
                {addItem}
            </div>

            
            
        </div>
            
        
    )

}

export default Homepage
