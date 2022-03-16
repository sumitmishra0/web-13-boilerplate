 import React, { useEffect,useState } from "react";
import axios from "axios"
import './MovieDashboard.css'



const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data,setdata] = useState([]);
    const getData = ()=>{
      axios.get( "https://movie-fake-server.herokuapp.com/data").then(response=>{
        setdata(response.data);
    });
    }

  
  useEffect(() => {
   getData();

  }, []);
  // console.log(data);


//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className = "movies-list">
         {data.map((e)=>(
           <div>
             {/* <h1>{e.id}</h1> */}
             <h1>{e.movie_name}</h1>
             <h2>{e.genre}</h2>
             <p>Rating-{e.rating}</p>
             <p>Release date -{e.release_date}</p>
             <img src={e.image_url}/>

           </div>
         ))}
      </div>
    </>
  );
};