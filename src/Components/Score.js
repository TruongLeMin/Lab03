import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
 
class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;
 
        return (
            <div>
                <h1 className='text-success'>Quiz Ended</h1>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
            </div>
        );
    }
}
 
export default Score;