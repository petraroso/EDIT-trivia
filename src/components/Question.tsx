import { useState, useEffect } from "react";
import "../App.css";

interface QuestionProps {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  setActiveQuestion: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Question: React.FC<QuestionProps> = ({
  question,
  correct_answer,
  incorrect_answers,
  setActiveQuestion,
  setScore,
}) => {
  const allAnswers = [correct_answer, ...incorrect_answers];
  const [randomizedAnswers, setRandomizedAnswers] = useState<string[]>([]);

  // Shuffle function using Fisher-Yates algorithm
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  useEffect(() => {
    const ra = shuffleArray(allAnswers);
    setRandomizedAnswers(ra);
  }, [question]);

  const onAnswerSelected = (answer: string, index: number) => {
    const isCorrect = answer === correct_answer;

    // Change the color of the clicked <li> element
    const listItems = document.querySelectorAll(
      ".quiz-container ul li"
    ) as NodeListOf<HTMLElement>;
    listItems.forEach((item, i) => {
      item.style.pointerEvents = "none"; //disabling li items to be clicked
      if (i === index) {
        item.style.backgroundColor = isCorrect ? "#A5CC66" : "#FF5A5A";
        item.style.borderColor = isCorrect ? "#A5CC66" : "#FF5A5A";
      }
    });

    // Delay the rerendering of the component
    setTimeout(() => {
      setActiveQuestion((prev) => prev + 1);
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      listItems.forEach((item) => {
        item.style.pointerEvents = "auto"; //enabling li items can be clicked again
        item.style.backgroundColor = "#ffffff";
        item.style.borderColor = "#eaeaea";
      });
    }, 800);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {randomizedAnswers.map((ans, index) => (
          <li onClick={() => onAnswerSelected(ans, index)} key={ans}>
            {ans}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
