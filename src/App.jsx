import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { simulateLoginApi } from './redux/slices/authSlice';

import Header from './components/layout/Header.jsx';
import Gameplay from './pages/Gameplay.jsx';
import Homepage from './pages/Homepage.jsx';


import config from './config.js';
import bonuses from './fluid/bonuses.js';
import widget from './fluid/widget.js';
import FluidScript from './fluid/FluidScript.jsx';
import FluidInitialised from './fluid/FluidInitialised.jsx';
import FluidInjected from './fluid/FluidInjected.jsx';
import FluidQuickDepositInitialised from './fluid/FluidQuickDepositInitialised.jsx';
import FluidQuickDepositInjected from './fluid/FluidQuickDepositInjected.jsx';

function App() {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [transaction, setTransaction] = useState('deposit');
	const [numberOfBonuses, setNumberOfBonuses] = useState(bonuses.length);
	const [initialisationMode, setInitialisationMode] = useState('injected');
	const [fluidComponentPrepared, setFluidComponentPrepared] = useState(false);
	const [fluidQuickDepositMounted, setFluidQuickDepositMounted] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	// The const will be used to load the inline Quick Deposit component
	// only for desktop in the ganeplay page.
	const isMobile = window.matchMedia('(max-width: 768px)').matches;


	// Set the use authentication state
	// Some of the state variables are used to control the Fluid component and its initialization.
	// The handleLogin function simulates a login API call and sets the loggedIn state to true if successful.
	// This is a placeholder for the actual login logic, which would typically involve an API call.
	// The loggedIn state is used to conditionally render the Fluid component and load the Fluid script.
	// The handleLogin function is called when the user clicks the login button in the header.
	const handleLogin = () => {
		dispatch(simulateLoginApi()).then((action) => {
			if (action.payload && action.payload.Success) {
				setLoggedIn(true);
				console.log('Login successful!');
			} else {
				console.log('Login failed or not successful!');
			}
		});
	};

	// Once the Fluid script is loaded in the DOM, initialize the Fluid component
	useEffect(() => {
		const onFluidScriptLoaded = () => {
			if (loggedIn && widget) {
				initializeFluid();
			}
		};

		window.addEventListener('fluidScriptLoaded', onFluidScriptLoaded);

		return () => {
			window.removeEventListener('fluidScriptLoaded', onFluidScriptLoaded);
		};
	}, [loggedIn, widget]);


	// The wallet is launched from the header, from the button "Billetera"
	const launchWallet = () => {
		setTransaction(undefined);
		setOpen(true);
	}

	/* Function to open and close the Fluid component */
	function close() {
		setOpen(false);
	}

	/* Example of events available to launch the wallet */
	function wallet() {
		setTransaction(undefined);
		setOpen(true);
	}

	function deposit() {
		setTransaction('deposit');
		setOpen(true);
	}

	function withdraw() {
		setTransaction('withdrawal');
		setOpen(true);
	}

	/*
		Another version of the Quick Deposit is available, this is a simplified version
		that can be used in the game page.
	*/
	function quickDeposit() {
		setTransaction('quick-deposit');
		setOpen(true);
	}

	/* Listen to the Fluid events */
	function onCommand(event) {
		console.info(`%cFluid COMMAND: ${event.detail}`, 'color: lightgreen', event);

		if (event.detail.message === 'close') {
			close();
		}
	}

	function onInfo(event) {
		console.info(`%cFluid INFO: ${event.detail}`, 'color: cornflowerblue', event);
	}

	function onError(event) {
		console.error(`Fluid ERROR: ${event.detail}`, event);
	}

	/* Initialize the Fluid component */
	async function initializeFluid() {
		setInitialisationMode('programmatic');

		const parameters = {
			operatorId: config.operatorId,
			...widget
		};

		console.log('Initializing Fluid', parameters);

		await fluid.init(parameters);

		console.log('Fluid initialized');
		setFluidComponentPrepared(true);
	}

	function getFluidComponent() {
		if (initialisationMode === 'injected') {
			return <FluidInjected
				open={open}
				transaction={transaction}
				onInfo={onInfo}
				onCommand={onCommand}
				onError={onError}
			/>
		} else if (initialisationMode === 'programmatic') {
			return <FluidInitialised
				open={open}
				transaction={transaction}
				onInfo={onInfo}
				onCommand={onCommand}
				onError={onError}
			/>
		}

		return null;
	}

	function getFluidQuickDepositComponent() {
		if (initialisationMode === 'injected') {
			return <FluidQuickDepositInjected
				onInfo={onInfo}
				onCommand={onCommand}
				onError={onError}
			/>
		} else if (initialisationMode === 'programmatic') {
			return <FluidQuickDepositInitialised
				onInfo={onInfo}
				onCommand={onCommand}
				onError={onError}
			/>
		}

		return null;
	}

	function getFluidComponentPrepared() {
		return loggedIn && fluidComponentPrepared;
	}

	function changeNumberOfBonuses() {
		const newNumberOfBonuses = numberOfBonuses - 1 < 0 ? 3 : numberOfBonuses - 1;
		setNumberOfBonuses(newNumberOfBonuses);
		console.log('Number of bonuses set to', newNumberOfBonuses);
	}


	return (
		<BrowserRouter>
			<div className={`layout-container ${isMobile ? 'mobile' : ''}`}>
				{/* sidebar */}
				<div className="d-flex">
					<div className="sidebar-container sidebar-expanded hidden">
						<img src="/screenshot-sidebar.png" />
					</div>
				</div>
				{/* main content */}
				<div className="content-container">
					<Header
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
						onLogin={handleLogin}
						onLaunchWallet={launchWallet}
					/>

					<div className="main-container">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/juego/gates-of-olympus-1000" element={<Gameplay isMobile={isMobile} loggedIn={loggedIn} />} />
							{/* Add more routes here */}
						</Routes>
					</div>
					<footer className="footer-container">
						<div className="footer__content container"></div>
					</footer>

					{/* Loads the fluid script automatically after login */}
					{loggedIn && <FluidScript />}

					{/* Load the web component automatically after login */}
					{getFluidComponentPrepared() && getFluidComponent()}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
