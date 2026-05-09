import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";

function PlantList({plants}) {
 
  return (
       <div>
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
       </div>
  );
}

export default PlantList;