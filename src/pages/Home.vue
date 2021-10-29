<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>DuocUC</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card>
                <ion-grid>
                    <ion-toolbar>
                        <ion-title>Bienvenido</ion-title>
                    </ion-toolbar>
            
                    <ion-item>
                        <ion-label position="stacked">Usuario</ion-label>
                        <ion-input name="inpUsuario"></ion-input>
                    </ion-item>
                    <ion-button name="btnIrGenerar" router-link="/password" expand="block">¡Genera tu contraseña!</ion-button> 
                </ion-grid>
            </ion-card>
        </ion-content>
    </ion-page>
</template> 

<script>
import { IonPage, IonHeader,IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonCard, IonGrid, IonButton} from '@ionic/vue'

export default{
    components: {
        IonPage,
        IonHeader,
        IonToolbar,  
        IonTitle, 
        IonContent,
        IonLabel,
        IonInput,
        IonItem,
        IonCard,
        IonGrid,
        IonButton
    }
}
</script>

<style>

</style>
