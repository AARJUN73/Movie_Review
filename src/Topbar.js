import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness7 from '@mui/icons-material/Brightness7';
import { useNavigate } from 'react-router-dom';

export default function Topbar({mode,setmode}) {
 const navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color='inherit' onClick={()=>navigate("/portal/home")}>Home</Button>
          <Button color='inherit' onClick={()=>navigate("/portal/movielist")}>Movies</Button>
          <Button color='inherit' onClick={()=>navigate("/portal/addmovie")}>Add movie</Button>
         <Button style={{marginLeft:"60%"}}
         startIcon={mode==="dark"?<Brightness4Icon/> :<Brightness7Icon/>} 
         color='inherit'
         onClick={()=>setmode(mode==="dark"? "light": "dark")}>
           {mode==="dark" ? "light":"dark"}Mode
         </Button>
     
          <Button color="inherit" onClick={()=>navigate("/")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}