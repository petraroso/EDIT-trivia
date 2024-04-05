import "../App.css";

interface UrlTypes {
  amount: string;
  category: string;
  difficulty: string;
}
interface UserFormProps {
  url: UrlTypes;
  setUrl: React.Dispatch<React.SetStateAction<UrlTypes>>;
  setFetchData: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserForm: React.FC<UserFormProps> = ({ url, setUrl, setFetchData }) => {
  const handleUrl = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUrl({ ...url, [name]: value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(url);
    setFetchData(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Choose how to play the quiz</h2>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        name="amount"
        value={url.amount}
        onChange={handleUrl}
        min="1"
        max="50"
      />

      <label htmlFor="difficulty">Select difficulty:</label>
      <select name="difficulty" value={url.difficulty} onChange={handleUrl}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label htmlFor="category">Select category:</label>
      <select name="category" value={url.category} onChange={handleUrl}>
        <option value="27">Animals</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="23">History</option>
        <option value="22">Geography</option>
        <option value="21">Sports</option>
      </select>

      <button type="submit">Play</button>
    </form>
  );
};

export default UserForm;
