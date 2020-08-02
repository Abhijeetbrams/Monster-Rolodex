import React, { useEffect }from "react";
import { useState } from "react";
import {useRef} from "react";
import axios from "axios";
import  CardList  from "./App/Component/CardListComponent";
import Search from "./App/Component/Search";
import './App.css';
function App() {
  const [monster, setMonster] = useState([]);
  const [searchName, setName] = useState("");
  const [filteredMonster, setFilter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(resp => {
          setMonster(resp.data);
        });
      console.log(monster);
    }

    fetchData();
  }, []);
  useEffect(() => {
    const mons = monster;
    setFilter(
      mons.filter(mon =>
        mon.name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName]);

  function changeName(event) {
    setName(event.target.value);

    //console.log(monster,"monster");
    //console.log(filteredMonster);
  }
  //console.log(monster);
  const cunter = useRef(0);
  return (
    <div className="App">
      <h1>Monster-Rolodex</h1>
     <Search handleChange={changeName} searchName={searchName}/>
     <CardList monster={monster} filteredMonster={filteredMonster} 
    searchName={searchName} /> 

    </div>
  );
}

export default App;
