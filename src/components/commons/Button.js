import React from 'react';

const Button = (props) => {
    return (
        <button name={props.name} onClick={props.onClick}>
            {props.message}
        </button>
    );   
}

export default Button;