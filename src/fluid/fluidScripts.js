export function listenForFluidEvents(ref, onCommand, onInfo, onError) {
	return () => {
		const fluid = ref.current;

		fluid.addEventListener('fluid-command', onCommand);
		fluid.addEventListener('fluid-info', onInfo);
		fluid.addEventListener('fluid-error', onError);

		return () => {
			fluid.removeEventListener('fluid-command', onCommand);
			fluid.removeEventListener('fluid-info', onInfo);
			fluid.removeEventListener('fluid-error', onError);
		}
	}
}

export function generateSessionId(prefix = '10001-') {
	const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	console.log('Generated session ID:', prefix + hash);
	return prefix + hash;
}
