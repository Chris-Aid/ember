import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        //Logged in
        if (user) {
          return this.afs.doc<User>(`/workspaces/8yCfbRjXyaIQWkZSYP1H/developerakademie/0X0D6XTtizJEScWRxIrY/users/${user.uid}`).valueChanges();
        } else {
          //Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`/workspaces/8yCfbRjXyaIQWkZSYP1H/developerakademie/0X0D6XTtizJEScWRxIrY/users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }
}
