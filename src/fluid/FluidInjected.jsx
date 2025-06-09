import { useLayoutEffect, useRef } from 'react';
import { generateSessionId, listenForFluidEvents } from './fluidScripts.js';
import config from '../config.js';
import widget from './widget.js';
import bonuses from './bonuses.js';

function FluidInjected({ onInfo, onCommand, onError, open, transaction }) {
	const ref = useRef(null);

	useLayoutEffect(listenForFluidEvents(ref, onCommand, onInfo, onError), [onCommand, onInfo, onError, ref]);

	return <fluid-widget
		ref={ref}
		id="fluid-widget-injected"
		operator-id={config.operatorId.toString()}
		user-id={widget.userId}
		session-id={generateSessionId(widget.sessionId)}
		locale={widget.locale}
		country={widget.countryCode}
		currency={widget.currencyCode}
		transaction={transaction}
		open={open}
		balance="1220.56"
		withdrawable-balance="900"
		bonuses={JSON.stringify(bonuses || [])}
		user-data={JSON.stringify(widget.userData)}
		deposit-limit=""
		z-index="1600"
	>
	</fluid-widget>
}



export default FluidInjected;
