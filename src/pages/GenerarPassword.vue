<template>
    <link ref="stylesheet" href="./theme/boton.css">
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
                    <div class="center">
                        <input type="checkbox" id="checkmayus">

                    </div>
      
                   
                </ion-item>              
                <ion-item>
                    <ion-label>Incluir números</ion-label>
                    <div class="center">
                        <input type="checkbox" id="checknum">

                    </div>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir simbolos</ion-label>
                    <div class="center">
                        <input type="checkbox" id="checksimb">

                    </div>
                </ion-item>
                <ion-item>
                    <ion-label>Incluir letra "ñ"</ion-label>
                    <div class="center">
                        <input type="checkbox" id="checkene">

                    </div>
                </ion-item>
                <ion-item>
                    <ion-label>Cantidad de letras</ion-label>
                    <form class="app">
                        <div class="numero">
                               <input type="text" id="cant" value="10" >
                        </div>

                    </form>
                </ion-item>
                <ion-item>
                    <ion-button name="btnGenerar" size="default">Generar contraseña</ion-button>
                    <ion-button name="btnCopiar" size="default">Copiar</ion-button>
                </ion-item>
            </ion-card>
        </ion-content>
      
    </ion-page>
</template>