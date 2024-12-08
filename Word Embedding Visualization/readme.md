# Word Embedding Visualization 🔤➡️🌌

An interactive React-based tool for visualizing word embeddings in a 2D space. This project aims to help users understand the concept of word embeddings in Natural Language Processing (NLP) through an intuitive visual representation.

## 🌟 Features

- **2D Visualization**: Representing word embeddings in a simplified 2D space.
- **Interactive Selection**: Click on words to see their relationships with other words.
- **Similarity Calculation**: Displays the closest words based on their position in the embedding space.
- **Customizable**: Easily extendable to include more words or different embeddings.

## 🖼️ Screenshot

![image](https://github.com/user-attachments/assets/ef55cc67-dde6-4497-9c00-496db0727f30)



## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/LHANTAEK/NLP.git
   cd NLP/Word\ Embedding\ Visualization
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 💻 Implementation Guide

To implement this visualization in your own project, follow these steps:

1. Create a new React project (if you haven't already):
   ```bash
   npx create-react-app word-embedding-visualization
   cd word-embedding-visualization
   ```

2. Install TailwindCSS (if not already installed):
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

3. Create a new file `WordEmbeddingVisualization.jsx` in your `src` folder and copy the following code:

```jsx
import React, { useState } from 'react';

const WordEmbeddingVisualization = () => {
  // Component code here (copy from the provided jsx file)
};

export default WordEmbeddingVisualization;
```

4. Copy the entire content of the `WordEmbeddingVisualization.jsx` file from this repository into your newly created file.

5. In your `App.js`, import and use the component:

```jsx
import React from 'react';
import WordEmbeddingVisualization from './WordEmbeddingVisualization';

function App() {
  return (
    <div className="App">
      <WordEmbeddingVisualization />
    </div>
  );
}

export default App;
```

6. Make sure your `index.css` includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Run your app:
   ```bash
   npm start
   ```

## 🔧 Customization

To add or modify words and their embeddings, edit the `words` array in the `Word_Embedding_Visualization.jsx` file:

```jsx
const words = [
  { word: "newword", x: 50, y: 50 },
  // Add more words here
];
```

## 📚 Learn More

- [Word Embedding](https://en.wikipedia.org/wiki/Word_embedding)
- [Word2Vec](https://en.wikipedia.org/wiki/Word2vec)
- [GloVe: Global Vectors for Word Representation](https://nlp.stanford.edu/projects/glove/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is currently unlicensed. All rights are reserved by the project owner.
If you're interested in using, modifying, or distributing this project, please contact the project owner for permission.

---

Created with 💙 by [LHANTAEK](https://github.com/LHANTAEK) and [Claude](https://claude.ai)
