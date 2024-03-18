import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { API } from './global';
export default function Movielist() {

    const [movie,setMovie]=useState([]);
    const getmovies=()=>{
        fetch(`${API}/get`,{
          method:"GET",
          headers:{"backend-token":localStorage.getItem("storetoken")}
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
