import {useState} from 'react'
import {useEffect} from 'react'
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection)=>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        projectFirestore.collection(collection).orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            const documents = [];
            snap.docs.forEach((doc)=>{
                documents.push({...doc.data(),id:doc.id})
                
            })
            setDocs(documents);
        })
    },[collection])

    return {docs}
}

export default useFirestore;