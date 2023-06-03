import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import Header from './Components/Functional_Component/Header';
import Footer from './Components/Functional_Component/Footer';


const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				<Header />
				<hr/>
				<Footer  note = {"For state management"}/>
			</div>
}
export default App;