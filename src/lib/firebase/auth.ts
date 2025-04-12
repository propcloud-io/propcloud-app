import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';

/**
 * Sign up a new user with email and password
 */
export async function signUp(email: string, password: string, displayName: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update the user's profile with the display name
    await updateProfile(user, { displayName });
    
    // Create a user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email,
      displayName,
      createdAt: serverTimestamp(),
      role: 'user',
    });
    
    return { success: true, user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign in a user with email and password
 */
export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    
    // Check if the user document exists
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    
    // If the user document doesn't exist, create it
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        role: 'user',
      });
    }
    
    return { success: true, user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign out the current user
 */
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Send a password reset email
 */
export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Get the current user's data from Firestore
 */
export async function getUserData(user: User) {
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      return { success: true, userData: userDoc.data() };
    } else {
      return { success: false, error: 'User data not found' };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
