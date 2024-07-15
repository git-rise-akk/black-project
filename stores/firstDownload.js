import { defineStore } from 'pinia';

export const firstDownload = defineStore('firstDownload', {
    state: () => ({ active: true }),
});