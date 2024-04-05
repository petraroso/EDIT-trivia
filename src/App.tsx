import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import UserForm from "./components/UserForm";

interface QuestionTypes {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface UrlTypes {
  amount: string;
  category: string;
  difficulty: string;
}

function App() {
  const [data, setData] = useState<QuestionTypes[]>([]);
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [url, setUrl] = useState<UrlTypes>({
    amount: "5",
    category: "27",
    difficulty: "easy",
  });

  //https://opentdb.com/api.php?amount=7&category=22&difficulty=easy

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${url.amount}&category=${url.category}&difficulty=${url.difficulty}`
      )
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, [fetchData]);

  //<Quiz data={data} />
  return (
    <div className="quiz-container">
      {fetchData ? (
        <Quiz data={data} />
      ) : (
        <UserForm url={url} setUrl={setUrl} setFetchData={setFetchData} />
      )}
    </div>
  );
}

export default App;
