
'use client';

import { useState } from 'react';

export default function Home() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('en'); 
  const getWords = async (count = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/word?count=${count}&lang=${lang}`);
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


<select onChange={(e) => setLang(e.target.value)} value={lang}>
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="it">Italian</option>
  <option value="de">German</option>
  <option value="fr">French</option>
  <option value="zh">Chinese</option>
  <option value="pt-br">Brazilian Portuguese</option>

</select>
      <div>
        <button onClick={() => getWords(1)} disabled={loading}>
          {loading ? 'Loading...' : 'Get a word'}
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



