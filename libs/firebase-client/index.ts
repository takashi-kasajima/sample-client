import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp(require("./env/firebase.client.key.dev.json"));

const db = firebase.firestore();

export { firebase, db };
