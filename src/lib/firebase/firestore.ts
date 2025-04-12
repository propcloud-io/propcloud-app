import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  DocumentData,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './config';

/**
 * Add a document to a collection with a specific ID
 */
export async function addDocument(collectionName: string, id: string, data: any) {
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { success: true, id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Add a document to a collection with an auto-generated ID
 */
export async function addDocumentWithAutoId(collectionName: string, data: any) {
  try {
    const docRef = doc(collection(db, collectionName));
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Get a document by ID
 */
export async function getDocument(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: 'Document not found' };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Update a document
 */
export async function updateDocument(collectionName: string, id: string, data: any) {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Delete a document
 */
export async function deleteDocument(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Query documents from a collection
 */
export async function queryDocuments(
  collectionName: string,
  constraints: QueryConstraint[] = []
) {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...constraints);
    const querySnapshot = await getDocs(q);
    
    const documents: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: documents };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Get documents where a field equals a value
 */
export async function getDocumentsWhere(
  collectionName: string,
  field: string,
  operator: '==' | '!=' | '>' | '>=' | '<' | '<=',
  value: any
) {
  return queryDocuments(collectionName, [where(field, operator, value)]);
}

/**
 * Get documents ordered by a field
 */
export async function getDocumentsOrderedBy(
  collectionName: string,
  field: string,
  direction: 'asc' | 'desc' = 'asc',
  limitCount: number = 100
) {
  return queryDocuments(collectionName, [orderBy(field, direction), limit(limitCount)]);
}
