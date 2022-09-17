import React, { useState } from "react";

function Sushi({sushi, moneyLeft, setMoneyLeft, onUpdateSushi, plates, setPlates}) {
  const [ isEaten, setIsEaten ] = useState(false)
 

  function calculateMoney() {
    if(isEaten === false) {
      setMoneyLeft(moneyLeft - sushi.price)
      setPlates([...plates, 0])
    } else {
      setMoneyLeft(moneyLeft + sushi.price)
      const newPlates = plates.filter((plate, index) => index < plates.length - 1)
      setPlates(newPlates)
    }
  }
console.log(plates)
  // function handleEaten(e) {
  //   const updatedPlates = sushi.map(plate => {
  //     if(plate.id === e.target.id) {
  //       return {...plate, eaten: !isEaten}
  //     } else {
  //       return {...plate, eaten: isEaten}
  //     }
  //   })
  //   setPlates(updatedPlates)
  //  }


  function handleClick(e) {
    if(moneyLeft > sushi.price){
        setIsEaten(isEaten => !isEaten)
        calculateMoney()
        onUpdateSushi(sushi)
    } else {
      setIsEaten(false)
    }
  }




  return (
    <div className="sushi" >
      <div className="plate" onClick={handleClick} >
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
