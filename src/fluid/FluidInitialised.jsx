import { useLayoutEffect, useRef } from 'react';
import { listenForFluidEvents } from './fluidScripts.js';
import bonuses from './bonuses.js';
import { useSelector } from 'react-redux';



function FluidInitialised({ onInfo, onCommand, onError, open, transaction }) {
	const ref = useRef(null);

	const userData = useSelector((state) => state.auth.userData?.Data);

	useLayoutEffect(listenForFluidEvents(ref, onCommand, onInfo, onError), [onCommand, onInfo, onError, ref]);

	return (
		<fluid-widget
			ref={ref}
			id="fluid-widget"
			transaction={transaction}
			open={open}
			balance={userData?.Balance || '0.00'}
			currencyCode={userData?.CurrencyId || 'COP'}
			withdrawable-balance="900"
			deposit-limit=""
			success-cta-link="initialised-success-cta-link"
			bonuses={JSON.stringify(bonuses || [])}
			z-index="1600"
		/>
	)
}

export default FluidInitialised;
