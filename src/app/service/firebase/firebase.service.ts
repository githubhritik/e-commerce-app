import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor( private $afAuth: AngularFireAuth){



  }


  onTwitterLogin(payload: any){

    // console.log(provider,"firebase")

  }
  // var provider = new firebase.auth.TwitterAuthProvider();
}
