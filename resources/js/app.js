import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './bootstrap';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
authStore.init();

app.use(router);
app.mount('#app');
