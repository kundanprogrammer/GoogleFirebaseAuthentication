import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC7I0Vm0Elowj4VjTbjce1Hb3gMhAO_3Bo",
  authDomain: "fir-new-8d094.firebaseapp.com",
  projectId: "fir-new-8d094",
  storageBucket: "fir-new-8d094.appspot.com",
  messagingSenderId: "894573266271",
  appId: "1:894573266271:web:7f4052e2225292a28522ea",
  measurementId: "G-06MV426NPM"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);