import { defineStore } from 'pinia';

export const useWindowStore = defineStore('windowStore', () => {
	const fontSize = ref(16);

	function updateWindowSize(width, height) {
		const numerator = width * height;
		const denominator = 1920 * 1080;

		fontSize.value = Math.round(10 * Math.sqrt(numerator / denominator));
	}

	return {
		fontSize,
		updateWindowSize,
	};
});
