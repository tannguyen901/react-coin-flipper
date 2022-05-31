import React, { Component } from 'react';
import {Chooser} from './helper'
import Coin from './Coin';


class CoinContainer extends Component{
    static defaultProps = {
        coin: [
            {side: "heads" , imgSrc : "https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc : "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            nFlips:0,
            nHeads : 0,
            nTails : 0,
            currCoin : null
        };
        this.handleClick = this.handleClick.bind(this)
    }

    coinFlipper(){
        let newCoin = Chooser(this.props.coin)
        this.setState(st =>{
            return {
                ...st,
                currCoin:newCoin,
                nFlips: st.nFlips +=1,
                nHeads: st.nHeads + (newCoin.side === "heads"? 1:0  ),
                nTails: st.nTails + (newCoin.side === "tails" ? 1: 0) 
            }
        })
    }

    handleClick(){
        this.coinFlipper()
    }

    render(){
        return(
            <div>
                <h1> Start flipiping</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <p>Heads shown {this.state.nHeads} times. Tails shown {this.state.nTails}.  Total flips are {this.state.nFlips}</p>
                <button onClick={this.handleClick}>Click to start flipping</button>
            </div>

        )

    }
}

export default CoinContainer;