import { useState } from "react"
const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState('');

    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        console.log(answerIdx);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const onClickNext = () => {
        setCurrentQuestion(currentQuestion+1);
    }

    return (
        <div className="quiz-container">
            <>
                <span className="active-question-no">{ currentQuestion +1 }</span>
                <span className="total-question">/{ questions.length }</span>
                <h2>{question}</h2>
                <ul>
                    {
                        choices.map((choice, index)=>(

                                <li
                                    onClick={()=>onAnswerClick(choice,index)}
                                    key={choice}
                                    className={answerIdx === index ? 'selected-answer' : null}>
                                    {choice}
                                </li>
                        ))
                    }
                </ul>
                <div className="footer">
                    <button onClick={onClickNext} disabled = {answerIdx === null}>
                        {currentQuestion === questions.length -1 ? "Finish" : "Next"}
                    </button>
                </div>
            </>
        </div>
    );
}

export default Quiz;