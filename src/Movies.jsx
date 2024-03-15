import React, { useEffect, useState } from "react";
import Counter from "./counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


function Movies({pro}){
    
    const navigate= useNavigate();
    let [show,setShow]=useState(false);
return(
    <Card sx={{ maxWidth: 35000000 , minWidth:350}} className="pads" >
        <CardMedia>
        <img className="movie-poster" src={pro.poster} alt="" />
        </CardMedia>
        <CardContent className="movie-spec">
        <Typography className="movie-name">{pro.name}
            <IconButton color="primary" aria-label="Toggle-description"onClick={()=>setShow(!show)}>
                {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large" /> }
            </IconButton>
            <IconButton color="primary" aria-label="Toggle-Info" onClick={()=>navigate(`/portal/view/${pro.id}`)}>
                <InfoIcon fontSize="medium"/>
            </IconButton>
            </Typography>
            <Typography className="movie-rating">⭐{pro.rating}</Typography>
            </CardContent>
        {show ? <p className="movie-summary">{pro.summary}</p> : null}
        <CardActions>
        <Counter/>
        </CardActions>
        </Card>
)
}

function Movie(){

 

    const[movie,setMovie]=useState([]);
    const getmovies=()=>{
        fetch("https://65f29ba3034bdbecc7654d97.mockapi.io/mockapi",{method:"GET",
    })
    .then((da)=>da.json())
    .then((movie)=>setMovie(movie));
};
useEffect(()=>{
    getmovies();
},[]);
    return(
         
        <div className="movie-list">
            
               { movie.map((list,index) => (
                    

                    <Movies pro={list} key={index}/>

                    
                ))
               }
        </div>

    )
        }



export default Movie;