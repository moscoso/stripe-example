//// Initialize Express App and Middleware ////

import * as CORS from 'cors';
export const cors = CORS({ origin: true });

import * as express from 'express';
export const app = express();

import { authenticateUser } from './helpers';

app.use(cors);
app.use(authenticateUser);

//// Initialize Firebase ////

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

//// Service account required for Stripe Connect OAuth
const serviceAccount = require('../../credentials.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://angular-stripe-b43e4.firebaseio.com"
});
 
//// If not using Stripe Connect, initialize without service account
// admin.initializeApp(functions.config().firebase);

export const db     = admin.firestore();
export const auth   = admin.auth();


//// Initalize Stripe NodeJS SDK ////

import * as Stripe from 'stripe'; 

export const stripeSecret       = 'sk_test_dSWXVrFeZvjPUigi4UN7pu9t';//functions.config().stripe.secret;
export const stripePublishable  = 'pk_test_KNyNxd2mSRzf9NekSB4mcBuF';//functions.config().stripe.publishable
export const stripeClientId     = 'ca_BgPIvxXjNSfPE6wqhTHU5KJFX1iGpBol';//functions.config().stripe.clientid; // only used for stripe connect

export const stripe = new Stripe(stripeSecret);

