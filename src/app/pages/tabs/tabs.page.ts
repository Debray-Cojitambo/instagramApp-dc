import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectTab: any;
  @ViewChild('tabs') tabs: IonTabs;
  isHide = false;

  constructor() {}

  ngOnInit() {}

  setCurrentTab(event) {
    console.log(event);    
    this.isHide = true;
    this.selectTab = this.tabs.getSelected();
    setTimeout(() => {
      this.isHide = false;
    }, 500);
  }
  getIcon() {
    switch (true) {
      case this.selectTab == 'home':
        return 'home';
      case this.selectTab == 'search':
        return 'bag-handle-outline';
      case this.selectTab == 'add-post':
        return 'film';
      case this.selectTab == 'wishlist':
        return 'search-outline';
      case this.selectTab == 'profile':
        return 'person';
    }
  }
}
