import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/button/Button'
import Display from '../components/display/display'

export default class Calculator extends Component {

    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC"className="triple" />
                <Button label="/" className="operation"/>
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" className="operation"/>
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" className="operation"/>
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" className="operation"/>
                <Button label="0" className="double"/>
                <Button label="." />
                <Button label="=" className="operation"/>
            </div>
        )
    }
}