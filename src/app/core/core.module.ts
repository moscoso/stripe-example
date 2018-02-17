import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Firebase setup instructions

// 1. delete this line, then...
// import { firebaseConfig } from '../../env'; 

// 2. Add your own firebase config to environment.ts
// 3. Then use it to initialize angularfire2 below, like so AngularFireModule.initializeApp(environment.firebaseConfig),


import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard'; 

import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({apiKey: 'AIzaSyCO5l66tGolHY7EZg63gtyZ9rLz_0Qs7Yw',
    authDomain: 'angular-stripe-b43e4.firebaseapp.com',
    databaseURL: 'https://angular-stripe-b43e4.firebaseio.com',
    projectId: 'angular-stripe-b43e4',
    storageBucket: '',
    messagingSenderId: '1087966377974'}),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  declarations: [],
  providers: [
    AuthService, 
    AuthGuard,     
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CoreModule { }
