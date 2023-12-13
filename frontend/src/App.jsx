import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  
  useEffect(()=>{
    try{
      axios.get("/api/jokes")
      .then((response)=>{
       setJokes(response.data)
      })

    }
    catch(err){
      console.log(err);
    }
  })

  return (
    <>
     <h1>Jokes</h1>
     <p>{jokes.length}</p>
      <div>
         {
          jokes.map((joke, index)=> (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))  
         } 
      </div>
    </>
  )
}

export default App
