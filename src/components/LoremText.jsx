import { useState } from "react";
import data from "../data";
import { nanoid } from "nanoid";
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
        <button type="submit" className="submit-btn">
          Generate
        </button>
      </form>
      <article className="lorem-container">
        {paragraph.map((paragraph) => {
          //   console.log(paragraph);

          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </main>
  );
};
export default LoremText;
