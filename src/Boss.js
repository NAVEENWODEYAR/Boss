
// import Comp1 from "./Components/LearnerComp/Comp1";
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import Test1 from "./Components/TestCompo/Test1";

// function App()
// {


//     return <div>
//         <Comp1/>
//     </div>
// }

// export default App



import Header from './Components/ClassCompo/Header';
import Footer from './Components/ClassCompo/Footer';

let Boss = () =>{
    return (<div>
             <Header/>
            <hr/>
            <Footer/>
    </div>);
}
export default Boss;