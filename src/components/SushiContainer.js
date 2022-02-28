import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, handleMoveSushi, handleEatSushi}) {
  return (
    <div className="belt">
      {
        sushis.map((sushi) => {
          return (
            <Sushi key={sushi.id} 
            sushi={sushi}
            handleEatSushi={handleEatSushi}
            />
        )})
      }
      <MoreButton handleMoveSushi={handleMoveSushi}/>
    </div>
  );
}

export default SushiContainer;
