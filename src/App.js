
import Navbar from "./Components/MadMax/Navbar"
import './CSS/style.css';
import FunctionA from './Components/FunctionalCompo/FunctionA';
import ClassA from "./Components/ClassCompo/ClassA";
import FunctionC from "./Components/ClassCompo/FunctionC";
import Cart1 from "./state/Cart1";
import Counter from "./state/Counter";
import Counter2 from "./state/Counter2";

function App()
{

    return <div>
            {/* <h1><center> NavBar  </center></h1> */}
            <Navbar />
            <Counter2 />
    </div>
}
export default App