import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import UseState1 from './Hooks/UseState1';

const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				{/*<Header />*/}	
				<hr/>
				{/*<Footer  note = {"For state management"}/>*/}
				<hr/>
				<UseState1 />
			</div>
}
export default App;