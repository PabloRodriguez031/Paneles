// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBPCG9rMm6NXUl4B0mDJ9ErTUb0S2y6FwE",
    authDomain: "panel-vestex.firebaseapp.com",
    databaseURL: "https://panel-vestex.firebaseio.com",
    projectId: "panel-vestex",
    storageBucket: "panel-vestex.appspot.com",
    messagingSenderId: "227919455045"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.