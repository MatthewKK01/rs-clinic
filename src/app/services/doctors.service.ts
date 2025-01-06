
import { Injectable } from '@angular/core';
import { IDoctors } from '../models/idoctors';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from '../models/iuser';
import { Firestore, collection, collectionData, deleteDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';


import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

}
