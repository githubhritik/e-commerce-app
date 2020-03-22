import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private $firebaseService: FirebaseService,
    private $afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.$afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res)
          resolve(res);
        })
    })
  }

  onFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.$afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

}
