import React, { useState } from 'react';
import ResetButton from './ResetButton';
import './EightBall.css';

function EightBall(props) {
  const [message, setMessage] = useState('Think of a Question...');
  const [color, setColor] = useState('black');
  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0
  });

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * props.answers.length);
    return props.answers[randomIndex];
  };

  const handleClick = () => {
    const randomAnswer = getRandomAnswer();
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
    setColorCounts(prevCounts => ({
      ...prevCounts,
      [randomAnswer.color]: prevCounts[randomAnswer.color] + 1
    }));
  };

  const handleReset = () => {
    setMessage('Think of a Question...');
    setColor('black');
    setColorCounts({
      green: 0,
      goldenrod: 0,
      red: 0
    });
  };

  return (
    <div>
      <div className="ball" style={{ backgroundColor: color }} onClick={handleClick}>
        {message}
      </div>
      <ResetButton onReset={handleReset} />
      <div className="color-counts">
        <div>Green: {colorCounts.green}</div>
        <div>Goldenrod: {colorCounts.goldenrod}</div>
        <div>Red: {colorCounts.red}</div>
      </div>
    </div>
  );
}

export default EightBall;