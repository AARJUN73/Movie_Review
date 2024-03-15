import React, { useEffect, useState } from 'react'
import Movie from './Movie';
export default function Movielist() {

    const [movie,setMovie]=useState([]);
    const getmovies=()=>{
        fetch("https://65f29ba3034bdbecc7654d97.mockapi.io/mockapi",{method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
    };
    useEffect(()=>{
        getmovies();
    },[]);
  return (
    <div className='movie-list'>
        {movie.map((element,index) => (
        <Movie key={index} movieTake={element} getmovies={getmovies}/>
      ))}
    </div>
  )
}
