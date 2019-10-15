import { Injectable,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../services/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;  // guardar datos del usuario logueado

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public ngZone: NgZone
  ) { 
    // guardo los datos en el localstorage
    this.afAuth.authState.subscribe(user=>{
      if(user){
        this.userData = user;
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Loguear con Google
  GoogleAuth(){
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  
  // logica de autentificacion para ejecutar proveedores de auth

  AuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result)=>{
      this.ngZone.run(()=>{
        this.router.navigate(['login']);
      })
      this.SetUserData(result.user);
    }).catch((error)=>{
      window.alert(error)
    })
  }

  SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.id}`);
    const userData: User = {
      uid:user.id,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      somethingCustom:user.somethingCustom
    }
    return userRef.set(userData, {
      merge:true
    })
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['bienvenidos']);
    })
  }
}
