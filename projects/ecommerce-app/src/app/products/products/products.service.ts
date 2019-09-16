import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  get() {
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(response => response.map(item => {
        return { ...item.payload.doc.data() };
      }))
    );
  }
}
