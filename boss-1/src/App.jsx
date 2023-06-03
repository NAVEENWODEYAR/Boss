import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import RenderD from './Components/Functional_Component/RenderD';


const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				{/*<Header />*/}	
				<hr/>
				{/*<Footer  note = {"For state management"}/>*/}
				<hr/>
				<RenderD value ={false}/>
			</div>
}
export default App;