import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestorageService } from 'src/app/service/firestorage.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { Estado } from '../../../interface/models';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  
  newEstado: Estado = {
    id: this.fireservice.getId(),
    foto: '',
    nombre: '',
    descripcion: '',

  }

  private path = 'estados';

  estados: Estado[] = [];

  newImage: string = '';

  newFile= '';

  constructor(   
    public nav: NavController,
    public fireservice: FirestoreService,
    public firestorage: FirestorageService
  ) { }
  

  ngOnInit() {
   this.getEstados();
   this.fireservice.getCollection("estados").subscribe(of=>{this.estados=of as any});
  }

  async guardarEstado(){
    const name = this.newEstado.nombre;
    const resp = await this.firestorage.uploadImage(
      this.newFile,
      this.path,
      name
    ); //carga la imagen en firestorage
    this.newEstado.foto = resp;
    
    this.fireservice.createDoc(this.newEstado, this.path, this.newEstado.id)

    this.nav.navigateForward("/tabs/home")

  }

  getEstados(){
    this.fireservice.getCollection<Estado>(this.path).subscribe(res=> {
     this.estados = res;
      console.log(res);

    });

  }

  async subirArchivo(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (image) => {
        this.newImage = image.target.result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
}