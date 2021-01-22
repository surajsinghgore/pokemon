import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const App1 = () => {
    const [type1,newtype1]=useState();
   
  const [num, newNum] = useState();
  const [ability, newability] = useState();
  const [ability1, newability1] = useState();
  const [newnum,setnewnum]=useState();
  const [imgs, newimgs] = useState();

  const [names, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newnum}`);
      setName(res.data.name);
      newimgs(res.data.sprites.other.dream_world.front_default);
  
      setMoves(res.data.moves.length);

      newtype1(res.data.types[0].type.name);


      newability(res.data.abilities[0].ability.name);
   
   

    }

    getData();
  });
  const nums=(e)=>{
newNum(e.target.value);
  }
const fire=()=>{
    setnewnum(num);

}

  return (
    <>
<header>
    Pokemon Finder 
</header>
<div className="inputs">
<input type="text" onChange={nums} placeholder="Enter Slot Number of Pokemon to get Details ...(min=1 max=898)" value={num}></input>
<button onClick={fire}>click here</button>

     

</div>
<div className="divs">
<div className="imgs">
    <img src={imgs} alt="Internet is to slow "/>
</div>
<h1>{names}</h1>
<h2>Slot Number: <span>{newnum}</span></h2>
<h2>Number of Moves: <span>{moves}</span></h2>
<h2>Pokemon Type: <span>{type1} </span></h2>
<h2>Ability Type:<span>{ability} {ability1} </span></h2>
</div>


     
    
    </>
  );
};

export default App1;
