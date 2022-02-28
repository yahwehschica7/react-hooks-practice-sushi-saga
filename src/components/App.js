import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [displaySushi, setDisplaySushi] = useState(0)
  const DISPLAY_COUNT = 4
  const [money, setMoney] = useState(100)
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      setSushis(data)
    })
  }, [])

  function moveSushi() {
    setDisplaySushi((displaySushi + DISPLAY_COUNT) % sushis.length)
  }

    function setEaten(piece) {
      
      const remainingMoney = money - piece.price
      if(remainingMoney >= 0) {

      setMoney(remainingMoney)

      setSushis(sushis.map((sushi)=> {
        return sushi.id === piece.id ? {...sushi, eaten: true} : sushi
        
      }))}
    }
  
  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis.slice(displaySushi, displaySushi + DISPLAY_COUNT)}
      handleMoveSushi={moveSushi}
      handleEatSushi={setEaten}      
      />
      <Table
      plates={sushis.filter(sushi => sushi.eaten)}
      money={money}
     />
    </div>
  );
}

export default App;
