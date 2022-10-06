import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.stories=[
      {name:'New'},
      {name:'Trabajo', src:'../../assets/imgs/6.jpg'},
      {name:'Animales', src:'../../assets/imgs/d.png'},
      {name:'Hermana', src:'../../assets/imgs/c.png'},
      {name:'Campo', src:'../../assets/imgs/b.png'},
      {name:'Amigos', src:'../../assets/imgs/8.jpg'},
    ];
    this.slideOpts={
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'film'},
      {value: 'photos', icon: 'images'},
    ];
    this.posts = [
      { id: 1, url: '../../assets/imgs/1.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 2, url: '../../assets/imgs/2.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 3, url: '../../assets/imgs/3.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 4, url: '../../assets/imgs/4.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 9, url: '../../assets/imgs/9.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 6, url: '../../assets/imgs/6.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 5, url: '../../assets/imgs/5.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 8, url: '../../assets/imgs/8.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 7, url: '../../assets/imgs/7.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 10, url: '../../assets/imgs/10.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 11, url: '../../assets/imgs/11.jpg', likes: 100, comments: 20, shares: 10 },
      { id: 12, url: '../../assets/imgs/12.jpg', likes: 100, comments: 20, shares: 10 },
    ];
  }
  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(5.5);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(5.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(6.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(7.5);
      case 901 <= innerWidth:
        return this.checkLength(9.5);
    }
  }
  checkLength(val) {
    let length = this.stories.length;
    return val < length ? val : length;
  }
  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

  async options() {
    const options = {
      component: OptionComponent,
      cssClass: 'custom-modal',
      swipeToClose: true
    };
    const modal = await this.modalCtrl.create(options);
    await modal.present();
  }
}
