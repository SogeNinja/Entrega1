<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {  getMessaging, getToken, onMessage} from 'firebase/messaging';


// Agregamos la app a Firebase
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBGllO5X7krg6T-yVrE6bWI_jBACEA3L98",
  authDomain: "ionic-project-b7cfe.firebaseapp.com",
  projectId: "ionic-project-b7cfe",
  storageBucket: "ionic-project-b7cfe.appspot.com",
  messagingSenderId: "954743611901",
  appId: "1:954743611901:web:fc5fe6c30a3a2122a2b994"
});

// Configurando credenciales por medio de token
const messaging = getMessaging(); 
getToken(messaging, { vapidKey: 'BB72NBzQmltzySVHWCiWS_iZNSy8UHdr7qQIwTJ5yYaNLY9BDSb3mpeIgjrXfzjwr-zidRN13KPruyCcZoFszSE' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('No existe un token disponible');

  }
});

// Push notification config



export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});


/* eslint-disable no-unused-vars */




</script>