import React, { Component } from 'react'

let quizData = require('./quiz_data.json')
class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }

    render(){
        return (
            <div>
                <div className="QuizQuestion">
                {quizData[Object.keys(quizData)][0].instruction_text}
                </div>
            </div>
        )
    }
}
export default Quiz