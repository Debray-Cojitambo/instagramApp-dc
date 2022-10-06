import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestorageService } from 'src/app/service/firestorage.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { Feeds } from '../../../interface/models';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonSlides) ionSlides: IonSlides
  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];

  constructor() { }

  ngOnInit() {
    this.slides = [
      {id: 1, name: 'Tienda'},
      {id: 2, name: 'Videos', notifications: 52},
      {id: 3, name: 'Coleccion', notifications: 43},
      {id: 4, name: 'likes', notifications: 99},
    ];
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.activities = [
      {id: 1, username: 'Jamilleth Cabrera', user_profile: 'assets/imgs/p1.jpg', time: '2 mins', activity: 'comment', comments: 'Tenemos grandes promociones en computadoras de escritorio y laptops desde $150 en adelante.Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v1.jpg'},
      {id: 2, username: 'Narcisa Calderon', user_profile: 'assets/imgs/p2.jpg', time: '5 mins', activity: 'comment', comments: 'Marca: Canon EOS T6i Cámara seminueva con sus accesorios, lente 18-55mm y memoria de 64gb. La camara funciona todo perfectamente la vendo por falta de uso Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v2.jpg'},
      {id: 3, username: 'Ing.Guido Cojitambo', user_profile: 'assets/imgs/p3.jpg', time: '16 mins', activity: 'comment', comments: 'Se vende bonito corsa evolution motor 1.4, es año 2006, tiene alarma y bloqueo central, batería nueva, todo funcional, Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v3.jpg'},
      {id: 4, username: 'Jon Jefferson', user_profile: 'assets/imgs/p4.jpg', time: '21 mins', activity: 'comment', comments: 'Remate de mochilas Material antifluido: Una X $17.00  - Dos X $30.00. Envios a nivel nacional. Aptas para chicos de colegio y universidad. Espacio para portalaptop. Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v4.jpg'},
      {id: 5, username: 'Maria Mercedes', user_profile: 'assets/imgs/p5.jpg', time: '27 mins', activity: 'comment', comments: ' El Gato de la Fortuna o “Luky Cat” es otro de los animales auspiciosos en el Feng Shui.Su color dorado simboliza riqueza.Es el Oro para los chinos. Con su garra izquierda levantada atraerá los buenos negocios o buenos clientes. Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v5.jpg'},
      {id: 6, username: 'Alex Jhonatan', user_profile: 'assets/imgs/p6.jpg', time: '34 mins', activity: 'comment', comments: 'Miel de Abeja 100% Pura, el envio a domicilio no tiene costo. Botella de 750 ML $10 y Litro 1000 ML $12. Escríbanos al WhatsApp: +593 0981344461', post: 'assets/imgs/v6.jpg'},
    ];
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(3.6);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(3.6);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(4.6);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(5.6);
      case 901 <= innerWidth:
        return this.checkLength(6.6);
    }
  }

  checkLength(val) {
    let length = this.slides.length;
    return val < length ? val : length;
  }
  
  changeTab(index) {
    this.activeTab = index;
    this.ionSlides.slideTo(index);
  }

  likeComment(item) {
    item.like = !item?.like;
  }
  bookmarkComment(item) {
    item.bookmark = !item?.bookmark;
  }

}
