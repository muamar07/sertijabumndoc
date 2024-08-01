import { initializeApp } from 'firebase/app';
import { getFirestore} from '@firebase/firestore';
import { doc, deleteDoc,  collection, getDocs, addDoc  } from 'firebase/firestore';
import { getStorage, ref, listAll, getDownloadURL, FirebaseStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyBaS06j5WxVUcCXBhgzTqrvQCNDkNG8_ok',
  authDomain: 'umndoc-oprec.firebaseapp.com',
  projectId: 'umndoc-oprec',
  storageBucket: 'umndoc-oprec.appspot.com',
  messagingSenderId: '646782853973',
  appId: '1:646782853973:web:b8ef258f92b62c455085dc'
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();
  export default firebaseConfig;
  export const storage = getStorage();


  {/*========================Delete Document collection=================================  */}
// const handleDeleteDocument = async (collectionName:string, documentId:string) => {
//   try {
//     const documentRef = doc(db, collectionName, documentId);
//     await deleteDoc(documentRef);
//     // console.log('Document successfully deleted!');
//   } catch (error) {
//     console.error('Error deleting document:', error);
//   }
// };

// handleDeleteDocument('new-member', 'ofvimShauPPnahfTzv5B');

{/* 
=========================Collect Documet to JSON============================================= */}

const exportCollectionToJson = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef); 

    const jsonData: any[] = [];
    querySnapshot.forEach((doc) => {
      jsonData.push(doc.data());
    });

    const jsonString = JSON.stringify(jsonData, null, 2);
    console.log(jsonString);
  } catch (error) {
    console.error('Error exporting collection to JSON:', error);
  }
};

exportCollectionToJson('new-member');
