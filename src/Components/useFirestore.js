import {useState,useEffect}from 'react'
import { projectFirestore } from '../firebase/Config.js'

const useFirestore = (collection) => {
    const [docs,setDocs] = useState([]);

    useEffect(() => {
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt','desc')
    .onSnapshot((snapshot) =>{
        const documents = snapshot.docs.map( doc => 
            ({id:doc.id,...doc.data()}) 
        );
        setDocs(documents);
    })
    return () => unsub();
    }, [collection])


    return { docs };
}

export default useFirestore
