import firebase from "firebase";
import config from "./config";

const firebaseApp = firebase.initializeApp(config);

const auth = firebaseApp.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
