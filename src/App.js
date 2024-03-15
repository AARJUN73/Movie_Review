
import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Register';
import Addmovie from './Addmovie';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import Notfound from './Notfound';
import Movielist from './Movielist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Moviedetail from './Moviedetail';
import Editmovie from './Editmovie';
function App() {
    const [mode,setMode]=useState("light");
   const darkTheme = createTheme({
    palette: {
      mode: mode,
     },
   });
  
  return (
    <div className="App">
       <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
              <Route path="home" element={<Home/>}/> 
              <Route path="addmovie" element={<Addmovie/>}/>
              <Route path="movielist" element={<Movielist/>}/>
              <Route path="view/:id" element={<Moviedetail/>}/>
              <Route path="edit/:id" element={<Editmovie/>}/>
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        </Paper>
        </ThemeProvider>
    </div>
  );
}

export default App;

