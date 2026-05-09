import { useState, useEffect } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
   const [plants, setPlants] = useState([]);
   const [search, setSearch] = useState("");

  function addPlant(newPlant) {
      setPlants((prev) => [...prev, newPlant]);
    }
  
     useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.log(err));
  }, []);

    const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main>
       <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;