import { useState } from "react";
import "../App.css";
import Question from "./Question";
import EndScreen from "./EndScreen";

interface QuestionTypes {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface QuizProps {
  data: QuestionTypes[];
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      {data.length > 0 && activeQuestion < data.length ? (
        <>
          <div>
            <span className="active-question-no">{activeQuestion + 1}</span>
            <span className="total-question">/{data.length}</span>
          </div>
          <Question
            question={data[activeQuestion].question}
            correct_answer={data[activeQuestion].correct_answer}
            incorrect_answers={data[activeQuestion].incorrect_answers}
            setActiveQuestion={setActiveQuestion}
            setScore={setScore}
          />
          <p className="score">Score: {score}</p>
        </>
      ) : (
        <EndScreen score={score} totalQuestions={data.length} />
      )}
    </>
  );
};

export default Quiz;
