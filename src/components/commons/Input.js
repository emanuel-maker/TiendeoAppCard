import React from 'react';

const Input = (props) => {

    function onChange(e){
        props.updateState(props.name,e.target.value);
    }

    return (
       <input 
       name={props.name} 
       type="text"
       value={props.value}
       onChange={onChange}
       placeholder={props.placeholder}
       maxLength={props.maxLength}
       />
    );   
}

export default Input;
