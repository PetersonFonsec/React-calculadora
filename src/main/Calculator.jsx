import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/button/Button'
import Display from '../components/display/display'

export default class Calculator extends Component {

    clearMemory(){
        console.log('clear')
    }

    addDigit(n){
        console.log('add digit')
    }
    
    setOperator(operator){
        console.log(operator)
    }   

    render() {


        const addDigit = n => this.addDigit(n)
        
        const setOperator = operator => this.setOperator(operator)

        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={ () => this.clearMemory() } className="triple" />
                <Button label="/"  click={ setOperator } className="operation"/>
                <Button label="7"  click={ addDigit } />
                <Button label="8"  click={ addDigit } />
                <Button label="9"  click={ addDigit } />
                <Button label="*"  click={ setOperator } className="operation"/>
                <Button label="4"  click={ addDigit } />
                <Button label="5"  click={ addDigit } />
                <Button label="6"  click={ addDigit } />
                <Button label="-"  click={ setOperator } className="operation"/>
                <Button label="1"  click={ addDigit } />
                <Button label="2"  click={ addDigit } />
                <Button label="3"  click={ addDigit } />
                <Button label="+"  click={ setOperator } className="operation"/>
                <Button label="0"  click={ addDigit } className="double"/>
                <Button label="."  click={ addDigit } />
                <Button label="="  click={ setOperator } className="operation"/>
            </div>
        )
    }
}