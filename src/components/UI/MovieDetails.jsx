// import { useLoaderData, useParams } from "react-router-dom"


// export const MoviesDetails=()=>{
//     const movieData=useLoaderData();
//     console.log(movieData);
  
//     return <h1>heelo:</h1>
// }





import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export const MoviesDetails = () => {
    const { id } = useParams(); // Get the movie ID from URL params
    const movieData = useLoaderData(); // Get the loaded data

    // Check if movieData is valid
    if (!movieData) {
        return <div>Loading...</div>; // Or handle error/loading state here
    }

    const { Title, Year, Director, Genre, Plot, Poster } = movieData;

   

    return (
        <div>
            {Poster && <img style={{height:"200px",width:"200px",borderRadius:"10%",marginTop:"18px"}} src={Poster} alt={Title} />}
            <h1>{Title}</h1>
            <p><strong>Year:</strong> {Year}</p>
            <p><strong>Director:</strong> {Director}</p>
            <p><strong>Genre:</strong> {Genre}</p>
            <p><strong>Plot:</strong> {Plot}</p>
        </div>
    );
};
