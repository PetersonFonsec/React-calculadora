import React from 'react'
import './Button.css'

export default props => 
    <button 
        onClick={ props.onClick(props.label)}
        className={`button ${ props.className }`}> 
        { props.label } 
    </button>
