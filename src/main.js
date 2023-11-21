import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTelegram,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faRightFromBracket,
  faUserGroup,
  faClipboardUser,
  faAddressCard,
  faGear,
  faLockOpen,
  faThumbsUp,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTelegram,
  faWhatsapp,
  faInstagram,
  faGraduationCap,
  faRightFromBracket,
  faUserGroup,
  faClipboardUser,
  faAddressCard,
  faGear,
  faLockOpen,
  faThumbsUp,
  faCircleXmark
);


import Ripple from "primevue/ripple";
import StyleClass from "primevue/styleclass";
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Dropdown", Dropdown)
  .component("Button", Button)
  .component("InputText", InputText)
  .directive("ripple", Ripple)
  .directive("styleclass", StyleClass)
  .mount("#app");
