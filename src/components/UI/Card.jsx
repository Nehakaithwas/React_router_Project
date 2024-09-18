import React from 'react';
import { NavLink } from 'react-router-dom';
// Card component to display movie details
export const Card = ({ currentMovie }) => {
  // Destructure the necessary fields from the movie object
  const { Title, Year, Poster, imdbID } = currentMovie;

  return (
    <div className="card">
      <img src={Poster} alt={Title} className="card-poster" />
      <div className="card-info">
        <h3 className="card-title">{Title}</h3>
        <p className="card-year">{Year}</p>
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer" className="card-link">
          More Info
        </a>
        <NavLink to={`/movies/${imdbID}`}>
        <button className='btn'>watch now</button>
        </NavLink>
       
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 200px;
          text-align: center;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 0.5rem;
          padding: 0.5rem;
        }
        .card-poster {
          width: 100%;
          height: auto;
        }
        .card-info {
          padding: 0.5rem;
        }
        .card-title {
          font-size: 1rem;
          margin: 0;
          font-weight: bold;
        }
        .card-year {
          color: #555;
        }
        .card-link {
          color: #007bff;
          text-decoration: none;
          font-size: 0.9rem;
          display: block;
          margin-top: 0.5rem;
        }
        .card-link:hover {
          text-decoration: underline;
        }
        .btn{
        background-color:#eb3471;
        border-radius:50px;
        color:black;
        height:50px;
        width:100px;
        }
      `}</style>
    </div>
  );
};
