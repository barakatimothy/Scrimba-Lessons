import React from 'react';
function emojiButtton(props){
    return(
        <button>
        <span role="img">{props.emoji}</span>
        {props.labelText}
        </button>
    )
}
export default emojiButtton;