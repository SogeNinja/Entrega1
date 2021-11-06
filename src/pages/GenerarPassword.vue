<template>
    <ion-page>
        <link ref="stylesheet" href="./theme/boton.css">
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
                    <ion-toggle name="tgMayus" ></ion-toggle>
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
/*
const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
 "y", "z"];
const NUM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const SIMB = ["!", '"' ,"#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]",
 "^", "_", "`", "{", "|", "}", "~"]
const Ñ = ["ñ"]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generarRandomPassword(largo, mayus, nums, simbs, eñe){
    var listastring = ABC
    var password = []
    var c = 0
    if(mayus){
        c+=1 
        password.push(shuffle(ABC)[0])
        var mayusculas = []

        listastring.array.forEach(element => {
            mayusculas.push(element.toUpperCase())
        });
        listastring = [].concat(listastring, mayusculas)
    }if (nums){
        c += 1
        password.push(shuffle(NUM)[0])
        listastring = [].concat(listastring, NUM)
    }if (simbs){
        c += 1
        password.push(shuffle(SIMB)[0])
        listastring = [].concat(listastring, SIMB)
    }if (eñe){
        c += 1
        password.push(shuffle(Ñ)[0])
        listastring = [].concat(listastring, Ñ)
    }

    for(var i = 0; i < (largo-c); i++){
        password.push(shuffle(listastring)[0])
    }
    return password.join("")
}
console.log(generarRandomPassword(12, true,true,true,true))
*/
</script>

<style>

#lbl1{
    font-size: 20px;
    text-align: center;
}
</style>
