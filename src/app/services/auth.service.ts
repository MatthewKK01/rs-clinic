import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth) { }

  registerUser(user: { email: string, password: string }) {
    return this.afs.createUserWithEmailAndPassword(user.email, user.password)
  }
  loginUser(user: { email: string, password: string }): any {
    return this.afs.signInWithEmailAndPassword(user.email, user.password)
  }
}
