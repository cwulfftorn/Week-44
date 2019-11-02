import React, { useState, useEffect } from "react";


export default function App3() {
  const [chuckNorris, setChuckNorris] = useState("");
  const [dadJoke, setDadJoke] = useState("");

  const [chuckSelector, setChuckSelector] = useState(false);

  useEffect(() => {
    function fetchChuckNorris() {
      console.log("Fetching Chuck Norris");
      fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => setChuckNorris(data.value))
        .catch(err => console.log(err));
    }
    fetchChuckNorris();
  }, [chuckSelector]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Fetching Dad Joke");
      fetch("https://icanhazdadjoke.com/slack", {
        headers: {
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => setDadJoke(data.attachments[0].text))
        .catch(err => console.log(err));
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <button onClick={() => setChuckSelector(!chuckSelector)}>
        Get ChuckNorris
      </button>
      <p>Joke: {chuckNorris}</p>
    </div>
  );
}