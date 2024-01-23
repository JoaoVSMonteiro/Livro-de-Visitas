import {collection,getDocs, addDoc,  getFirestore} from 'firebase/firestore/lite'
import App from '../../../../../firebase.config'

const firestore = getFirestore(App)
const firebaseService = {
    findAll: async (collectionName: string) => {
        const column = await collection(firestore, collectionName)
        const snapshot = await getDocs (column)
        const docList = await snapshot.docs.map(doc => doc.data())
        return docList

    },
    save: (data: any, collectionName: string) => {
        addDoc(collection(firestore, collectionName), data)
    }


}

export default firebaseService