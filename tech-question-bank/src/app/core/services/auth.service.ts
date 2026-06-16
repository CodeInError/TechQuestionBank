import { Injectable } from '@angular/core';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  User
} from 'firebase/auth';

import { firebaseApp } from '../firebase/firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = getAuth(firebaseApp);

  constructor() {}

  register(
    name: string,
    email: string,
    password: string
  ) {

    return createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    ).then(async (result) => {

      await updateProfile(result.user, {
        displayName: name
      });

      return result;
    });
  }

  login(
    email: string,
    password: string
  ) {

    return signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  googleLogin() {

    const provider = new GoogleAuthProvider();

    return signInWithPopup(
      this.auth,
      provider
    );
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}