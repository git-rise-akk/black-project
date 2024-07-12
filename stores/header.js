import { defineStore } from 'pinia';

export const headerState = defineStore('header', {
    state: () => ({ state: true, startClass: true }),
});