import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import C_LifeCycle from './Components/Class_Component/C_LifeCycle'
import Event from './Components/Functional_Component/Event';


const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				{/*<Header />*/}	
				<hr/>
				{/*<Footer  note = {"For state management"}/>*/}
				<hr/>
				<Event />
			</div>
}
export default App;