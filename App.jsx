import "./App.css";
import { Routes,Route,Link } from "react-router-dom";
import Home from './components/Main'
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItem,setcartItem] = useState([]);
  const [userName,setuserName] = useState(["Guest"]);

  return (
    <div className="App">
      <header id="Header"> 
        <div id="User_Profile">
          <table>
            <tr>
              <td><img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="" id="Guest_icon" /></td>
              <td><h3>{userName}</h3></td>
            </tr>
          </table>
          </div> 
       <div id="Nav_File">
       <table>
          <tr>
            <th style={{width:"20px"}}><b><Link to="/" className="Nav_Link">Home</Link></b></th>
            <th style={{width:"20px"}}><b><Link to="/About" className="Nav_Link">About</Link></b></th>
            <th style={{width:"20px"}}><b><Link to="/Cart" className="Nav_Link">Cart</Link></b></th>
            <th style={{width:"20px"}}><b><Link to="/Contact" className="Nav_Link">LogIn</Link></b></th>

          </tr>
        </table>
       </div>
     

      </header>
      <Routes>
        <Route path="/" element={<Home setcartItem={setcartItem}/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact setName={setuserName}/>}></Route>
        <Route path="/Cart" element={ <Cart myCart = { cartItem } />}></Route>
      </Routes>
    </div>
  );
}

export default App;


