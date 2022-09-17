import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( {sushis, moneyLeft, setMoneyLeft, onUpdateSushi, isEaten, setIsEaten, plates, setPlates} ) {
  const [lastSushi, setLastSushi] = useState(4)
  const [firstSushi, setFirstSushi] = useState(0)

  function handleMoreSushi() {
    setFirstSushi(firstSushi + 4)
    setLastSushi(lastSushi + 4)
  }
  console.log(plates)
  const displayFourSushis = sushis.filter((sushi, index) => index > firstSushi - 1 && index < lastSushi)

  return (
    <div className="belt">
      {displayFourSushis.map(sushi => (<Sushi key={sushi.id} sushi={sushi} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft} onUpdateSushi={onUpdateSushi} setIsEaten={setIsEaten} isEaten={isEaten} setPlates={setPlates} plates={plates}/>))}
      <MoreButton onMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
