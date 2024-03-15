import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
export default function MovieDetail(){
  const {id} =useParams();
  
  const [movie,setMovie] = useState([]);
  const ratingStyles={
    color:movie.rating>=8.5?"green":"red",
  };
   
  useEffect(() => {
    fetch(`https://65f29ba3034bdbecc7654d97.mockapi.io/mockapi/${id}`,{
        method:"GET"
    })
    .then((data)=> data.json())
    .then((mv) =>setMovie(mv));
  },[]);
   
  console.log(movie);

  return(
    <div>
        <iframe width="656" height="369" src={movie.trailer} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="movie-detail-container">
          <div className="movie-spec">
            <h2 className="movie-name">{movie.name}</h2>
            <h3 style={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
          </div>
          <p className="movie-summary">{movie.summary}</p>
        </div>
    </div>
  )
}