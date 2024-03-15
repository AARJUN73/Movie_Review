import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export default function Counter() {
    let [like,setLike]=useState(0);
    let [disLike,setDisLike]=useState(0);
    const incrementlike=()=>setLike(like+1);
    const incrementdislike=()=>setDisLike(disLike+1);
  return (
    <div>
     <IconButton aria-label='like' color='primary' onClick={incrementlike}>
     <Badge badgeContent={like} color="primary">
      👍
    </Badge>
     </IconButton>
     <IconButton aria-label='Dislike' color='error' onClick={incrementdislike}>
     <Badge badgeContent={disLike} color="error">
      👎
    </Badge>
     </IconButton>
    </div>
  )
}
