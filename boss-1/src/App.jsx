import React from 'react';
import Navbar from './Components/Class_Component/Navbar';
import Form2 from './Components/Functional_Component/Form2';


const App = (props) => {

	return <div className='app_Component'>
				<Navbar />
				<hr />
				{/*<Header />*/}	
				<hr/>
				{/*<Footer  note = {"For state management"}/>*/}
				<hr/>
				<Form2 />
			</div>
}
export default App;