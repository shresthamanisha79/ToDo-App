import {FaTrashAlt} from "react-icons/fa"
import '../App.css'

const Card = (props) => {
    return(
        <div className="main-card-div">
            <h3 style={{backgroundColor: '#FF5733', color: 'white', width:500, height:50, margin:'auto', marginBottom:20}}>{props.item} <FaTrashAlt style={{color:'white', marginTop:12, float:"right"}}/></h3>
            
        </div>
    )
}
export default Card