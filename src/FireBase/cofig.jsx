import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMYmwvReTpJ12--gTSzyV1it41Kcm6DQs",
    authDomain: "olx-clone-5b87a.firebaseapp.com",
    projectId: "olx-clone-5b87a",
    storageBucket: "olx-clone-5b87a.appspot.com",
    messagingSenderId: "833866895596",
    appId: "1:833866895596:web:62a2a7ac98a0d0ccac15c9",
    measurementId: "G-9GXGN896BE"
  };
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const storage = getStorage();

export const db = getFirestore(app)