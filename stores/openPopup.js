import { defineStore } from 'pinia';

export const openPopup = defineStore('openPopup', {
    state: () => ({ popupCallback: false, popupService: [0, false] }),
});