import React, { useState } from "react";

function Sushi({sushi, moneyLeft, setMoneyLeft, onUpdateSushi}) {
  const [isEaten, setIsEaten ] = useState(false)

  function calculateMoney() {
    if(isEaten === false) {
      setMoneyLeft(moneyLeft - sushi.price)
    } else {
      setMoneyLeft(moneyLeft + sushi.price)
    }
  }

  function handleEaten() {
    const updatedSushi = {
      ...sushi,
      eaten: !isEaten,
    }
    fetch(`http://localhost:3001/sushis/${sushi.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSushi),
    })
    .then(resp => resp.json())
    .then(updatedSushi => onUpdateSushi(updatedSushi))
  }

  function handleClick() {
    if(moneyLeft > sushi.price){
      setIsEaten(isEaten => !isEaten)
      calculateMoney()
      handleEaten()
    } else {
      setIsEaten(false)
    }
  }




  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
