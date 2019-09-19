import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private basePath = '/products';

  order;

  constructor(private firestore: AngularFirestore) { }

  get(id) {
    return this.firestore.doc(`${this.basePath}/${id}`).snapshotChanges().pipe(
      map(item => {
        return { id: item.payload.id, ...item.payload.data() };
      }));
  }

  getAll() {
    return this.firestore.collection(this.basePath).snapshotChanges().pipe(
      map(response => response.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() };
      }))
    );
  }

  add(product) {
    return this.firestore.collection('products').add(product);
  }

  bought() {

  }
}
