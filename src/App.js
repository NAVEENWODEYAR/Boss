
// import Navbar from "./Components/MadMax/Navbar"
import './CSS/style.css';
import Cart3 from "./state/Cart3";
import Navbar from './state/Navbar';
// import FunctionA from './Components/FunctionalCompo/FunctionA';
// import ClassA from "./Components/ClassCompo/ClassA";
// import FunctionC from "./Components/ClassCompo/FunctionC";
// import Cart1 from "./state/Cart1";
// import Cart2 from "./state/Cart2";
// import Message from "./EventBinding/Message";
function App()
{

    return <div>
            {/* <h1><center> NavBar  </center></h1> */}
            <Navbar  />
            <hr />
            <Cart3 />
            <hr />
    </div>
}
export default App