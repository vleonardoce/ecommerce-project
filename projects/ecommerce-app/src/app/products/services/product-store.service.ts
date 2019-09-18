import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin } from 'rxjs';

@Injectable()
export class ProductStoreService {

  private basePath = '/products';

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) { }

  uploadFiles(images) {
    const tasks = [];

    images.forEach(image => {
      const path = `${this.basePath}/${Date.now()}_${image.name}`;
      const task = this.storage.upload(path, image);
      const ref = this.storage.ref(path);
      tasks.push(task.then(() => ref.getDownloadURL().toPromise()));
    });

    return forkJoin(tasks);
  }
}
