
import { Injectable } from '@angular/core';
import { IDoctors } from '../models/idoctors';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, collectionData, deleteDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';


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
        return setDoc(doc(usersRef, res.user.uid), user), setDoc(doc(docRef, res.user.uid), { ...doctor, id: res.user.uid });
      }
    ).catch((err) => console.log(err))
  }
  fetchDocs(): Observable<IDoctors[]> {
    const doctorsCollection = collection(this.db, 'doctors')
    return collectionData(doctorsCollection) as Observable<IDoctors[]>
  }
  async getDoctor(id: string) {
    const doctorsRef = doc(this.db, 'doctors', id)
    const docSnapshot = await getDoc(doctorsRef);
    const data = docSnapshot.data();
    return data as IDoctors;
  }
  async deleteDoctor(id: string) {
    const doctorsRef = doc(this.db, 'doctors', id)
    return await deleteDoc(doctorsRef);
  }
}
