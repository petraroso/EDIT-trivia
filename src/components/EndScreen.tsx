import "../App.css";

interface EndScreenProps {
  score: number;
  totalQuestions: number;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions }) => {
  return (
    <>
      <div className="result">
        <span>You had </span>
        <span className="active-question-no">
          {score}/{totalQuestions}
        </span>
        <span> correct answers!</span>
      </div>
      <div className="buttonDiv">
        <button onClick={() => window.location.reload()}>Replay</button>
      </div>
    </>
  );
};

export default EndScreen;
