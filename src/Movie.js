import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
export default function Movie({movieTake,getmovies}) {
  const navigate=useNavigate();
  const [show,setShow]=useState(true);
  function deleteMovie(id){
    fetch(`https://65f29ba3034bdbecc7654d97.mockapi.io/mockapi/${id}`,{method:'DELETE'}).
    then(()=>getmovies()).then(()=>alert("this card gets deleted now."))
    console.log(id);
  }
  return (
    <Card className='movie-container'>
        <img className='movie-poster' src={movieTake.poster} alt='as'/>
        <CardContent>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movieTake.name}
            <IconButton color="primary" aria-label="toggle-description" onClick={()=>setShow(!show)}>
            {show ?<ExpandLessIcon fontSize='large' />:<ExpandMoreIcon fontSize='large'/>}  
            </IconButton>

            <IconButton color="primary" aria-label="movie-info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)}>
                <InfoIcon fontSize='medium' />
                        
            </IconButton>

            </h2>
            <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
        </div>
        </CardContent>
        
       {show ? <p className='movie-summary'>{movieTake.summary}</p>:null}
        <CardActions>
        
        <IconButton sx={{marginLeft:"auto"}}
        aria-label='editmovie'
        onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}>
                <EditIcon color='secondary'/>
        </IconButton>
        <IconButton sx={{marginLeft:"auto"}}
        aria-label='editmovie'
        onClick={()=>deleteMovie(movieTake.id)}>
                <DeleteIcon color='secondary'/>
        </IconButton>

        </CardActions>
    </Card>
  )
}


