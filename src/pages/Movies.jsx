import React, { useEffect, useState } from 'react';
import { Card } from '../components/UI/Card'; // Adjust the path as needed
import { getApiMovies } from '../api/getApiMovies'; // Adjust the path as needed
import { useLoaderData,useNavigation } from 'react-router-dom';




export const Movies = () => {
//   const [movies, setMovies] = useState([]);
const moviesData=useLoaderData();
console.log(moviesData)
const navigation = useNavigation();
 


  return (
    <div className="movies-container">
    {
            moviesData && moviesData.Search.map((currMovie)=>{
            return <Card key={currMovie.imdbID} currentMovie={currMovie}/>
            
            setLoading(false)
          })
      
          
    }
    
      <style jsx>{`
        .movies-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};
