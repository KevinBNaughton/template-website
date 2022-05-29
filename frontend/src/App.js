import './index.scss';
import { Outlet } from "react-router-dom";
import { Navbar } from './components/navbar/navbar'
import React, { useState, useEffect } from 'react';
import { DefaultLayout } from './components/layouts/defaultLayout'
import { BreakpointEnum } from './enums/genericEnums.ts'
import variables from './App.scss'
import { navbarbuttons } from './testdata/data'

function App() {
	const [width, setWindowWidth] = useState(0);

	useEffect(() => {
		updateDimensions();

		window.addEventListener('resize', updateDimensions);

		return () => window.removeEventListener('resize', updateDimensions);
	}, [])

	const updateDimensions = () => {
		const width = window.innerWidth
		setWindowWidth(width)
	}

	const responsive = {
		[BreakpointEnum.Mobile]: width <= (parseInt(variables.breakpointLaptop) - 1) && width >= parseInt(variables.breakpointMobile),
		[BreakpointEnum.Laptop]:  width <= (parseInt(variables.breakpointDesktop) - 1) && width >= parseInt(variables.breakpointLaptop),
		[BreakpointEnum.Desktop]: width >= parseInt(variables.breakpointDesktop),
	}

	return (
		<div id="main">      
			<DefaultLayout>
				<Navbar isMobile={responsive[BreakpointEnum.Mobile]} logo={"images/pain.png"} navigationButtons={navbarbuttons}>
				</Navbar>
				<Outlet />
			</DefaultLayout>
		</div>
	);
}

export default App;
