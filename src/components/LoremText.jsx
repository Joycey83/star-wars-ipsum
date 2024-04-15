import { useState } from "react";
import Title from "./Title";

const LoremText = () => {
  const [countNum, setCountNum] = useState(1);
  return (
    <main>
      <Title />

      <form>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={countNum}
          id="amount"
          step="1"
          min="1"
          max="8"
        />
        <button type="submit">Generate</button>
      </form>
    </main>
  );
};
export default LoremText;
