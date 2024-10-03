import { defineStore } from 'pinia';

export const useDeviceStore = defineStore('deviceStore', () => {
    const device = ref('mobile');
    function returnsDevice(width) {
        if (width >= 768 && width < 1280) {
            device.value = 'tablet';
        } else if (width >= 1280) {
            device.value = 'desktop';
        }
	}
    
    return { device, returnsDevice };
});