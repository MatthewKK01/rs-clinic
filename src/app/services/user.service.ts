import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, addDoc, } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFireAuth, private db: Firestore) { }

  registerUser(email: string, password: string) {
    this.afs.createUserWithEmailAndPassword(email, password).then((res) => console.log(res)).catch((err) => console.log(err))
  }
  loginUser(email: string, password: string) {
    this.afs.signInWithEmailAndPassword(email, password).then((res) => console.log(res)).catch((err) => console.log(err))
  }
  addUser(user: IUser) {
    const collectionInstance = collection(this.db, 'users');
    addDoc(collectionInstance, user).then(res => console.log(res)).catch(err => console.log(err))
  }
}
