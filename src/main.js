import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* La Firebase implementation comentamos debido a que no lo usamos de momento por lo que arroja el error */

// import firebase package
/* 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqLmSeEFiHcNStXghLkqhvyRUeC-u-lL8",
  authDomain: "ionic-app-2b996.firebaseapp.com",
  projectId: "ionic-app-2b996",
  storageBucket: "ionic-app-2b996.appspot.com",
  messagingSenderId: "740740572056",
  appId: "1:740740572056:web:3cedcb460d2117269b41ed"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
*/

  
/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});