import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7axF9k-WNtoR3BxbSUbkFjvlL7A2V-TM",
  authDomain: "quickstart-1616377204957.firebaseapp.com",
  projectId: "quickstart-1616377204957",
  storageBucket: "quickstart-1616377204957.appspot.com",
  messagingSenderId: "56529370715",
  appId: "1:56529370715:web:2c3fcfcca4d70fe9abc97e",
  measurementId: "G-S867H3G5NW",
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth & Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Tạo Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Tạo hoặc lấy thông tin người dùng
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export default app;
