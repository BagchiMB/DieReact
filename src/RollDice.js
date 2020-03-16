import React, {Component} from 'react'
import Die from './Die'
import './RollDice.css'
class RollDice extends Component
{
    constructor(props)
    {
        super(props)
        this.state={D1:1,D2:1, rolling:false }
        this.roll=this.roll.bind(this)
    }
    roll()
    {
        const a= Math.floor(Math.random()*6 +1)
        const b= Math.floor(Math.random()*6 +1)
        this.setState({D1:a,D2:b,rolling:true})
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }
    render()
    {
        return(
            <div className="RollDice">
                <div className="RollDice-Die">
                    <Die num={this.state.D1} rolling={this.state.rolling}/>
                    <Die num={this.state.D2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling} href="#">{this.state.rolling?"Rolling..":"Roll Dice"}</button>
            </div>
            
        );
    }
}

export default RollDice