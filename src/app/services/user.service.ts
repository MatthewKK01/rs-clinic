import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, doc, getDoc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

}
