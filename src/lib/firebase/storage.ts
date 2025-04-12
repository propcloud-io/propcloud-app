import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage';
import { storage } from './config';
import { generateId } from '../utils';

/**
 * Upload a file to Firebase Storage
 */
export async function uploadFile(file: File, path: string, customFileName?: string) {
  try {
    const fileName = customFileName || `${generateId()}-${file.name}`;
    const storageRef = ref(storage, `${path}/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return {
      success: true,
      url: downloadURL,
      path: snapshot.ref.fullPath,
      fileName,
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Get the download URL for a file
 */
export async function getFileURL(filePath: string) {
  try {
    const storageRef = ref(storage, filePath);
    const url = await getDownloadURL(storageRef);
    return { success: true, url };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Delete a file from Firebase Storage
 */
export async function deleteFile(filePath: string) {
  try {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * List all files in a directory
 */
export async function listFiles(directoryPath: string) {
  try {
    const storageRef = ref(storage, directoryPath);
    const res = await listAll(storageRef);
    
    const filePromises = res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return {
        name: itemRef.name,
        path: itemRef.fullPath,
        url,
      };
    });
    
    const files = await Promise.all(filePromises);
    return { success: true, files };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
