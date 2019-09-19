import { UserService } from './../../core/security/user.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class SaleService {

  private basePath = '/sales';

  constructor(private firestore: AngularFirestore, private user: UserService) { }

  bought() {
    return this.user.get().pipe(
      mergeMap(user => {
        return this.firestore.collection(this.basePath, ref => ref.where('user', '==', user.uid)).snapshotChanges().pipe(
          map(response => response.map(item => {
            return { id: item.payload.doc.id, ...item.payload.doc.data() };
          }))
        );
      })
    );
  }

  save(sale) {
    return this.firestore.collection(this.basePath).add(sale);
  }
}
