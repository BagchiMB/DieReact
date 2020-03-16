import React, { Component } from 'react'
import './Die.css'
class Die extends Component
{
    constructor(props)
    {
        super(props)
        this.numtodigit=this.numtodigit.bind(this)
    }
    numtodigit(n)
        {
            if(n==1)
            {
                return "one"
            }
            else if(n==2)
            {
                return "two"
            }
            else if(n==3)
            {
                return "three"
            }
            else if(n==4)
            {
                return "four"
            }
            else if(n==5)
            {
                return "five"
            }
            else
            {
                return "six"
            }
        }
    render()
    {
        let s=this.props.rolling?" Shaking":""
        let p="fas fa-dice-"+this.numtodigit(this.props.num)+s
        return(
            <div className="Die">
            <i className={p}></i>
            </div>
        );
    }
}

export default Die 