// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  production: false,
  firebase: {
    apiKey: 'AIzaSyCO5l66tGolHY7EZg63gtyZ9rLz_0Qs7Yw',
    authDomain: 'angular-stripe-b43e4.firebaseapp.com',
    databaseURL: 'https://angular-stripe-b43e4.firebaseio.com',
    projectId: 'angular-stripe-b43e4',
    storageBucket: '',
    messagingSenderId: '1087966377974'
  },

  functionsURL: 'https://us-central1-angular-stripe-b43e4.cloudfunctions.net',
  stripePublishable: 'pk_test_KNyNxd2mSRzf9NekSB4mcBuF'

};