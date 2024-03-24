
import { Injectable } from '@angular/core';
import { IDoctors } from '../models/idoctors';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private afs: AngularFireAuth, private db: Firestore) { }
  private searchCriteriaSubject: BehaviorSubject<{ name: string, category: string }> = new BehaviorSubject<{ name: string, category: string }>({ name: '', category: '' });

  setSearchCriteria(name: string, category: string) {
    this.searchCriteriaSubject.next({ name, category });
  }

  getSearchCriteria() {
    return this.searchCriteriaSubject.asObservable();
  }

  registerUser(email: string, password: string, user: IUser, doctor: IDoctors) {
    this.afs.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(res);
        const usersRef = collection(this.db, 'users');
        const docRef = collection(this.db, 'doctors');
        return setDoc(doc(usersRef, res.user.uid), user), setDoc(doc(docRef, res.user.uid), doctor);
      }
    ).catch((err) => console.log(err))
  }
  fetchDocs(): Observable<IDoctors[]> {
    const doctorsCollection = collection(this.db, 'doctors')
    return collectionData(doctorsCollection) as Observable<IDoctors[]>
  }
}
