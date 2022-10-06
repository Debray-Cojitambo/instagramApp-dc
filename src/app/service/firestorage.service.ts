import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public storage: AngularFireStorage) { }

  uploadImage(file: any, path: string, descripcion: string): Promise<string> {
    return new Promise(resolve => {
      const filePath = path + '/' + descripcion;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            const logo = res;
            console.log(logo);
            resolve(logo);
            return;
          });
        })
      ).subscribe();
    });
  }
}
