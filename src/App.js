import './App.css';
import {useState,useEffect}from 'react'
import { projectFirestore } from './firebase/Config.js'
import Title from './Components/Title'
import UploadForm from './Components/UploadForm.js'
import ImageGrid from './Components/ImageGrid.js'
import Modal from './Components/Modal.js'


function App() {
  const [modalurl,setModalUrl] =useState(null);


  const [docs,setDocs] = useState([]);



    useEffect(() => {
    const unsub = projectFirestore.collection('images')
    .orderBy('createdAt','desc')
    .onSnapshot((snapshot) =>{
        const documents = snapshot.docs.map( doc =>
            ({id:doc.id,...doc.data()}) 
        );
        setDocs(documents);
        
        
  
    })
    return () => unsub();
    }, ['images',docs])


   

const onDelete = (id) =>{
  setDocs(docs.filter(doc => doc.id !==id))
  projectFirestore.collection("images").doc(id).delete()


}






  return (
    <div className='App'>
    <Title />
    <UploadForm />
    <ImageGrid docs={docs} setModalUrl={setModalUrl} onDelete={onDelete}/>
    {modalurl && <Modal modalurl={modalurl}  setModalUrl={setModalUrl}/>}
    </div>
  );
}

export default App;
