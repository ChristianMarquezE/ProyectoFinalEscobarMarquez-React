import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'jorrego-ecommerce.firebaseapp.com',
  projectId: 'jorrego-ecommerce',
  storageBucket: 'jorrego-ecommerce.firebasestorage.app',
  messagingSenderId: '935755495945',
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function getAsyncData() {
  const collectionRef = collection(db, 'products');
  const productsSnapshot = await getDocs(collectionRef);

  const documentsData = productsSnapshot.docs.map((doc) => {
    const fullData = doc.data();
    fullData.id = doc.id;
    return fullData;
  });

  return documentsData;
}

export async function getAsyncItemById(itemID) {
  const docRef = doc(db, 'products', itemID);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;
}

export async function getAsyncItemsByCategory(catID) {
  const productsColRef = collection(db, 'products');
  const q = query(productsColRef, where('category', '==', catID));

  const productsSnapshot = await getDocs(q);

  const documentsData = productsSnapshot.docs.map((doc) => {
    const fullData = doc.data();
    fullData.id = doc.id;
    return fullData;
  });

  return documentsData;
}

export async function getAsyncItemsByColeccion(colID) {
  const productsColRef = collection(db, 'products');
  const q = query(productsColRef, where('coleccion', '==', colID));

  const productsSnapshot = await getDocs(q);

  const documentsData = productsSnapshot.docs.map((doc) => {
    const fullData = doc.data();
    fullData.id = doc.id;
    return fullData;
  });

  return documentsData;
}

//Sólo una vez. (Testing - Crear Base de Datos)
export async function exportProductsToDB() {
  for (let item of products) {
    delete item.id;
    const docID = await addDoc(collection(db, 'products'), item);
    console.log('Creado documento', docID.id);
  }
}

export async function createBuyOrder(orderData){
  const newOrderDoc = 
    await addDoc(collection(db, "orders"), orderData); 

  return newOrderDoc.id
}
