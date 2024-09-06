import React from 'react'

const QuestionList = ({ question, option, handleclick,currentanswer }) => {
    return (
        <div>
            <h1>{question}</h1>
            <ul>
                {option.map((option, index) => (
                    <li key={index} onClick={()=>handleclick(option)} className={currentanswer===option ? 'selected' : null}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default QuestionList