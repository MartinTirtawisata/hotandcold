import React from 'react';

import TopBox from '../components/topbox';
import BottomBox from '../components/bottombox';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: null,
            guessCount: 0,
            guessList: [],
            totem: 25

        };
    }

    updateValue = (num) => {
        this.setState({currentValue: num.currentTarget.value})
    }

    guessHandler = () => {
        let currentGuess = this.state.currentValue;
        if (currentGuess) {
            let guessCount = this.state.guessCount;
            let guessList = this.state.guessList;

            guessList.push(currentGuess);
            guessCount = guessCount + 1;

            let totem = this.state.totem;

            let totemDiff = totem   - parseInt(currentGuess);

            let feedback = '';

            if (totemDiff >= 25){
                feedback = 'Cold';
            } else if(totemDiff >= 15){
                feedback = 'Warm';
            } else if (totemDiff >= 5){
                feedback = 'Hot!';
            } else if (totemDiff === 0){
                feedback = 'BINGO!'
            }

            console.log(feedback);
            console.log(guessList);

            this.setState({guessList: guessList, guessCount:guessCount, feedback: feedback})

        } else {
            alert('Please enter a valid number')
        }
    }

    render(){
        return(
            <div style={{minHeight: '500px', maxWidth: '400px', margin: 'auto', marginTop:'100px'}}>

                <TopBox feedback={this.state.feedback}/>

                <div style={{height: '300px', width: '100%', border: '1px solid black' }}>
                    <input type="number" placeholder="Enter a number" name="userGuess" onChange={this.updateValue} style={{width: '100%', height: '30px', marginTop: '40px'}} />

                    <button onClick={this.guessHandler} style={{width: '100%', height: '30px', marginTop: '20px'}}>Guess</button>

                    <h1>Guess#{this.state.guessList.length}!</h1>
                </div>

                <BottomBox guessList={this.state.guessList} />
                
            </div>
        
        )
    }
}