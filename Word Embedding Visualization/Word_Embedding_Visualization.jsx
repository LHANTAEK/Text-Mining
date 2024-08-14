import React, { useState } from 'react';

const WordEmbeddingVisualization = () => {
  // 예시 단어와 그들의 2D 임베딩 (실제로는 고차원이지만, 시각화를 위해 2D로 단순화)
  const words = [
    { word: "king", x: 80, y: 70 },
    { word: "queen", x: 75, y: 85 },
    { word: "man", x: 60, y: 50 },
    { word: "woman", x: 55, y: 65 },
    { word: "crown", x: 90, y: 80 },
    { word: "royal", x: 85, y: 75 },
    { word: "palace", x: 95, y: 60 },
    { word: "house", x: 40, y: 40 },
    { word: "cat", x: 20, y: 80 },
    { word: "dog", x: 25, y: 75 },
    { word: "pet", x: 30, y: 85 },
  ];

  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const calculateDistance = (word1, word2) => {
    const dx = word1.x - word2.x;
    const dy = word1.y - word2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Word Embedding Visualization</h2>
      <svg width="400" height="400" viewBox="0 0 100 100" className="bg-white shadow-lg rounded-lg">
        {words.map((word, index) => (
          <g key={index} onClick={() => handleWordClick(word)}>
            <circle
              cx={word.x}
              cy={word.y}
              r="2"
              fill={selectedWord === word ? "red" : "blue"}
            />
            <text
              x={word.x}
              y={word.y - 2}
              fontSize="3"
              textAnchor="middle"
              fill={selectedWord === word ? "red" : "black"}
            >
              {word.word}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-4 text-center">
        <p className="font-semibold">Click on a word to see its relations</p>
        {selectedWord && (
          <div className="mt-2">
            <p>Selected word: <span className="font-bold">{selectedWord.word}</span></p>
            <p>Closest words:</p>
            <ul>
              {words
                .filter(w => w !== selectedWord)
                .sort((a, b) => calculateDistance(selectedWord, a) - calculateDistance(selectedWord, b))
                .slice(0, 3)
                .map((word, index) => (
                  <li key={index}>{word.word}</li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordEmbeddingVisualization;
