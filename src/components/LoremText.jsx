import { useState } from "react";
import data from "../data";
import Title from "./Title";

const LoremText = () => {
  const [countNum, setCountNum] = useState(1);
  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let paragraphAmount = parseInt(countNum);
    setParagraph(data.slice(0, paragraphAmount));
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
      <article>
        {paragraph.map((paragraph, index) => {
          console.log(paragraph);

          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </main>
  );
};
export default LoremText;
