import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis, setSushis ] = useState([])
  const [ moneyLeft, setMoneyLeft ] = useState(100)
  const [ plates, setPlates ] = useState([])
  
  
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setSushis(data)
    })
  }, [])

  function handleUpdateSushi(updatedSushi) {
    const updatedSushis = sushis.map((sushi) => {
      if (sushi.id === updatedSushi.id) {
        return updatedSushi
      } else {
        return sushi
      }
    })
    setSushis(updatedSushis)
  }

  

  return (
    <div className="app">
      <SushiContainer sushis={sushis} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft} onUpdateSushi={handleUpdateSushi} plates={plates} setPlates={setPlates} />
      <Table moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft} setPlates={setPlates} plates={plates} />
    </div>
  );
}

export default App;
