import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonIcon, IonLabel, IonListHeader } from '@ionic/angular/standalone';
import { Keyboard } from '@capacitor/keyboard';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonIcon, IonLabel, IonListHeader],
})
export class HomePage {
  constructor() {
    Keyboard.addListener("keyboardDidShow", () => console.log('keyboardDidShow', window.innerWidth, window.innerHeight));
  }
}
