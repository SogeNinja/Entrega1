<template>
    <ion-page>
        <ion-toolbar>
            <ion-title>DuocUC</ion-title>
        </ion-toolbar>

        <ion-content>
            <ion-card>
                <ion-toolbar>
                    <ion-title>Genera tu Contraseña</ion-title>
                </ion-toolbar>
                <ion-item>
                    <ion-label id="lbl1" name="lblPassword">Password</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir mayúsculas</ion-label>
                    <ion-toggle name="tgMayus"></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir números</ion-label>
                    <ion-toggle name="tgNums"></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir simbolos</ion-label>
                    <ion-toggle name="tgSimb"></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir letra "ñ"</ion-label>
                    <ion-toggle name="tgEnie"></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-label>Cantidad de letras</ion-label>
                    <ion-input name="inpCant" align="right" type="number" min="0" max="10" maxlenght="2"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-button name="btnGenerar" size="default">Generar contraseña</ion-button>
                    <ion-button name="btnCopiar" size="default">Copiar</ion-button>
                </ion-item>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonLabel, IonInput, IonItem, IonToggle} from '@ionic/vue'


export default ({
    IonPage,
    IonHeader,
    IonToolbar,  
    IonTitle,
    IonContent, 
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonToggle
})
</script>

<style>

#lbl1{
    font-size: 20px;
    text-align: center;
}
</style>
