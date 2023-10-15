import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTelegram, faWhatsapp, faInstagram, faSquareCheck);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(PrimeVue, { ripple: true });
app.mount('#app')


