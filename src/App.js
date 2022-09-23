

import { useState } from 'react';
import './App.css';
import ApiPractice from './components/ApiPractice/ApiPractice';
import Blog from './components/Blog/Blog';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Mobile from './components/Mobile/Mobile';
import NavBar from './components/NavBar/NavBar';
const styleCss ={
  backgroundColor:"purple",
  color:"white"
}
function App() {
const [count ,setCount]=useState(0)

const increaseBad=()=>{
  setCount(count+1)
  console.log("clicked");
}
  return (
    <div className="App">
<NavBar count={count}/>
      {/* <Header/> */}
      <ApiPractice addHandle={increaseBad}/>
      {/* <Blog/> */}
    {/* <Country/> */}
    {/* <Mobile/> */}
    </div>
  );
}





  


export default App;
