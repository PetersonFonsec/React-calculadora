import React from 'react'
import './Button.css'

export default props => 
    <button 
        onClick={ () => props.click( props.label ) }
        className={`button ${ props.className }`}> 

        { props.label } 

    </button>
