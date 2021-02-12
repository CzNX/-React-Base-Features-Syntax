const UserInput = (any) =>{
    return(
        <div>
        <input type='text' onChange={any.input} value={any.username}></input>
        </div>
    )
};

export default UserInput;