import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config ] = args;
    const response = await originalFetch(resource, config);
    if (response.status === 403) {
        router.push('/unauthorized')
        response.msg = "TEst" //return {error: true, message: "unauthorized"}
    }
    return response;
};

const app = createApp(App)

app.use(router)

app.mount('#app')
