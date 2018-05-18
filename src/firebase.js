import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCsfLax95FI3TD67hXWfCCOPoYdFOfwg78",
  authDomain: "portfolio-3f7f5.firebaseapp.com",
  databaseURL: "https://portfolio-3f7f5.firebaseio.com",
  projectId: "portfolio-3f7f5",
  storageBucket: "portfolio-3f7f5.appspot.com",
  messagingSenderId: "857319774184"
});

export const fire = {
  db: app.database(),
  base: firebase,
};
