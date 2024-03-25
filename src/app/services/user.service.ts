import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, addDoc, doc, getDoc, setDoc, collectionData, collectionChanges } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFireAuth, private db: Firestore) { }

  private userDataSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  userData$: Observable<IUser> = this.userDataSubject.asObservable();


  registerUser(email: string, password: string, user: IUser) {
    this.afs.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(res);
        const usersRef = collection(this.db, 'users');
        return setDoc(doc(usersRef, res.user.uid), user)
      }
    ).catch((err) => console.log(err))
  }
  loginUser(email: string, password: string) {
    this.afs.signInWithEmailAndPassword(email, password).then(
      async (res) => {
        console.log(res.user.uid);
        const userRef = doc(this.db, 'users', res.user.uid);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const document = userSnapshot.data();
          console.log(document); // Use userData as needed
          const userData = { ...document, id: res.user.uid } as IUser;
          this.userDataSubject.next(userData);
        } else {
          console.log('User not found');
        }
      }
    ).catch((err) => console.log(err));
  }
  async getDoctor(id: string) {
    const userRef = doc(this.db, 'users', id)
    const docSnapshot = await getDoc(userRef);
    const data = docSnapshot.data();
    return data as IUser;
  }
}
