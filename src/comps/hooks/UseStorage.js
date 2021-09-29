import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore,timestamp} from '../firebase/config'

const UseStorage = (file)=>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{

        const storageRef = projectStorage.ref(file.name);
        const firestoreRef = projectFirestore.collection('images');

        storageRef.put(file).on('state-change',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timestamp();
            firestoreRef.add({url,createdAt});
        })
    },[file])

    return {progress,error,url};
}

export default UseStorage 