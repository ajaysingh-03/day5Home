import { useState } from 'react';
import './App.css';
import data from '../Data/data';

function App() {
  const [count, setCount] = useState('');
  const [paragraphs, setParagraphs] = useState([]);

  const handleGenerate = () => {
    const numParagraphs = parseInt(count);

    if (numParagraphs <= 0) {
      alert('Please enter a valid number');
      return;
    }
    if (numParagraphs > data.length) {
      alert('Please enter a number between 1 and 10');
      return;
    }

    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    const selectedParagraphs = shuffledData.slice(0, numParagraphs);
    setParagraphs(selectedParagraphs);
  };

  return (
    <>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="head">
        <span>Paragraphs:</span>
        <input
          type="number"
          placeholder="Enter number of paragraphs"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button id="generatebtn" onClick={handleGenerate}>Generate</button>
      </div>
      <div className="paragraphs">
        {paragraphs.map((item, index) => (
          <p key={index}>{item.paragraph}</p>
        ))}
      </div>
    </>
  );
}

export default App;