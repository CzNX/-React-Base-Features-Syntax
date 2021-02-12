import './UserOutput.css'
const UserOutput = (props) =>{
    return(
    <div  className='u'> 
    <p onClick={props.click}>Click me to change / para 1 and UNAME : {props.username}</p>
    </div>
    )
};

export default UserOutput;