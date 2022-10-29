import React, { useEffect, useState } from "react";
function App() {
  const [quote, setQuote] = useState('')

  const fetchQuote = () =>{
    fetch('https://api.adviceslip.com/advice',{cache: "no-store"})
    .then(res => res.json())
    .then(data => setQuote(data.slip.advice))
    .catch( e => console.log(e))
  }
  useEffect(fetchQuote,[])
  return (
    <div className="app">
      <div className="card">
        <h1 className="text">{quote}</h1>
      </div>
      <button onClick={fetchQuote}>
        <span>Next advice</span>
      </button>
    </div>
  );
}

export default App;
