export function throttle(func, delay) {
	let timeoutId;
	let lastExecTime = 0;

	return function (...args) {
		const currentTime = Date.now();
		const elapsed = currentTime - lastExecTime;

		const execute = function () {
			func.apply(this, args);
			lastExecTime = currentTime;
		};

		clearTimeout(timeoutId);

		if (elapsed > delay) {
			execute();
		} else {
			timeoutId = setTimeout(execute, delay - elapsed);
		}
	};
}

export function debounce(func, delay) {
	let timeoutId;

	return function (...args) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}
