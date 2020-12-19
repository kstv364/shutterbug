import firebase from "firebase";
import config from "./config";

const firebaseApp = firebase.initializeApp(config);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { auth, db, storage };
