import React, {useEffect, useState} from 'react';


function App() {
  
const [Starwars, setStarwars] = useState('')

  useEffect(() => {
    async function getStarwars(){
      // let response = await fetch(process.env.REACT_APP_API_URL)
      let response = await fetch("https://swapi.dev/api/people?")
      let data = await response.json()
      setStarwars(data.results)
      console.log(data.results[1].name)
    }
    getStarwars()
  },)
  
  return (
    <div>
      {Starwars.map((starwar) => <li>{starwar.name}</li>)} 
    </div>
  );
}

export default App;
