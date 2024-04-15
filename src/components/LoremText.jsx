import { useState } from "react";
import Title from "./Title";

const LoremText = () => {
  const [countNum, setCountNum] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <Title />

      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={countNum}
          id="amount"
          step="1"
          min="1"
          max="8"
          onChange={(e) => setCountNum(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
    </main>
  );
};
export default LoremText;
