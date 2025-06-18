
'use client';

import { useState } from 'react';

export default function Home() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWords = async (count = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/word?count=${count}`);
      const data = await res.json();
      setWords(data.words || ['Error']);
    } catch (err) {
      console.error('Error:', err);
      setWords(['Error']);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main>
      <h1>Random Word Generator</h1>

      <div>
        <button onClick={() => getWords(1)} disabled={loading}>
          {loading ? 'Loading...' : 'Get 1 Word'}
        </button>

      </div>

      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </main>
  );
}



