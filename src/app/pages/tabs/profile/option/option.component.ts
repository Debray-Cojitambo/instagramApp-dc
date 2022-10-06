import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {

  options = [
    { icon: 'settings-sharp', label: 'Configuracion', redirectTo: ''},
    { icon: 'archive-outline', label: 'Archivo', redirectTo: ''},
    { icon: 'bookmark-outline', label: 'Guardado', redirectTo: ''},
    { icon: 'list-outline', label: 'Mejores amigos', redirectTo: ''},
    { icon: 'person-add-outline', label: 'Descubrir personas', redirectTo: ''},
    { icon: 'warning-outline', label: 'Informar de un problema', redirectTo: ''},
   

  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

}
