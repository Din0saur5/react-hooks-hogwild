import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

import PiggyCard from "./PiggyCard";
import Filter from "./Filter";
import { Button } from "react-bootstrap";



function App() {

	const [livingHogs, setLivingHogs] = useState(hogs)
	const [displayHogs, setDisplayHogs] = useState(livingHogs)
	const [dummyState, setDummyState] =useState(false)
	const handleSlaughter = (targetHog) => {
	  let survivingHogs = displayHogs.filter(hog=>{
		return hog!==targetHog
	  })

	  setLivingHogs(survivingHogs)
	  setDisplayHogs(survivingHogs)
	  setDummyState(!dummyState)
	}
	
	const handleSorting = (filteredHogs) => {
		setDummyState(!dummyState)
		setDisplayHogs(filteredHogs)

	}
	
	useEffect(() => {
		// Any code you want to run when displayHogs changes can go here
		// For example, you can log the current displayHogs
		
	  }, [dummyState]);

	return (
		<div className="App">
			<Nav />
			<button className='filter' onClick={()=>{setDisplayHogs(hogs); setLivingHogs(hogs); }} style={{'position':'absolute','left':150}}>Restore Piggies</button>
			<Filter handleSorting={handleSorting} hogs={livingHogs}/>
			<div className="ui grid container moveDown">
			{displayHogs.map((hog)=>{
				console.log(hog)
			return	<PiggyCard handleSlaughter={handleSlaughter} key={hog.name} hog={hog}></PiggyCard>
			})}
			</div>
		</div>
	);
}

export default App;
