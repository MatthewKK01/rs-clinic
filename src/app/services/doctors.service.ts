import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDoctors } from '../models/idoctors';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private afs: AngularFireAuth, private db: Firestore) { }

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
}
