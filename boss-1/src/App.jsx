import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import UseState from './Hooks/UseState';

const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				{/*<Header />*/}	
				<hr/>
				{/*<Footer  note = {"For state management"}/>*/}
				<hr/>
				<UseState />
			</div>
}
export default App;