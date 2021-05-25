import './App.css';
import {useState} from 'react'
import Title from './Components/Title'
import UploadForm from './Components/UploadForm.js'
import ImageGrid from './Components/ImageGrid.js'
import Modal from './Components/Modal.js'


function App() {
  const [modalurl,setModalUrl] =useState(null);
  return (
    <div className='App'>
    <Title />
    <UploadForm />
    <ImageGrid setModalUrl={setModalUrl}/>
    {modalurl && <Modal modalurl={modalurl}  setModalUrl={setModalUrl}/>}
    </div>
  );
}

export default App;
