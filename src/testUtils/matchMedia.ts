Object.defineProperty(window, 'matchMedia', {
	value: () => ({
			matches: false,
			addListener: () => {},
			removeListener: () => {},
		})
});

Object.defineProperty(window, 'getComputedStyle', {
		value: () => ({
				getPropertyValue: () => {}
		})
});

export default window;

