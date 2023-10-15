import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

library.add(faTelegram, faWhatsapp, faInstagram, faSquareCheck, faGraduationCap);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router, PrimeVue, { ripple: true });
app.mount('#app')


