import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Quiz.css'

const Quiz = () => {
    const questions = [
        {
            question: "1.what is ReactJS ?",
            options: ["CSS framework", "js library", "testing tool", "js framework"],
            answer: "js library"
        },
        {
            question: "2.what is 2+3 ?",
            options: ['3', '5', '9', '4'],
            answer: "5"
        },
        {
            question: "3.what is value of PI ?",
            options: ['7/22', '3.12', '22/7', '3.41'],
            answer: "22/7"
        },
        {
            question: "4.what was the name of the first computer virus ?",
            options: ['CryptoLocker', 'creeper', 'Slammer', 'Stuxnet'],
            answer: "creeper"
        },
        {
            question: "5.who was the  first woman to win a noble prize  ?",
            options: ['Alva Myrdal', 'jane Addams', 'Marie Curie', 'Andrea Ghez'],
            answer: "Marie Curie"
        },
        {
            question: "6.what is acrophobia a fear of ?",
            options: ['Mud', 'Water', 'Fire', 'Height'],
            answer: "Height"
        },
        {
            question: "7.what is the only flag that does not have four sides?",
            options: ['canada', 'Nepal', 'croatia', 'Jamaica'],
            answer: "Nepal"
        },
        {
            question: "8.what chemical element is designed as Hg ?",
            options: ['Silver', 'Tin', 'Mercury', 'Copper'],
            answer: "Mercury"
        },
        {
            question: "9.Hitler's party is known as ?",
            options: ['Labour', 'Ku-Klux', 'Nazi', 'Democratic'],
            answer: "Nazi"
        },
        {
            question: "10.what year was the first man sent to space ?",
            options: ['1957', '1961', '1969', '1975'],
            answer: "1961"
        },
        {
            question: "11.who was the first woman in space ?",
            options: ['Patricia Robertson', 'Valentina Tereshkova', 'Sunita williams', 'Kalpana chawala'],
            answer: "Valentina Tereshkova"
        }

    ]
    const [currentquestionindex, setcurrentquestionindex] = useState(0);
    const [currentanswer, setcurrentanswer] = useState(null)
    const [score, setscore] = useState(0)
    const handleclick = (option) => {
        setcurrentanswer(option)
        if (option === questions[currentquestionindex].answer) {
            setscore(score + 1)
        }
    }
    const handlenextquestion = () => {
        setcurrentquestionindex(currentquestionindex + 1)
        setcurrentanswer(null)
    }
    return (
        <div>
            {currentquestionindex < questions.length ? <div>
                <QuestionList question={questions[currentquestionindex].question}
                    option={questions[currentquestionindex].options}
                    handleclick={handleclick} currentanswer={currentanswer} />
                <button disabled={currentanswer === null} className={currentanswer ===
                    null ? 'button-disable' : 'button'} onClick={() => handlenextquestion()}>Next Questions</button>
            </div> : <div><h1>your score is {score}</h1></div>}
        </div>

    )
}

export default Quiz