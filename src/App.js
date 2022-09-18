import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [quote, setQuote] = useState('')

  const fetchQuote = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setQuote(res.data.slip.advice)
    })
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
