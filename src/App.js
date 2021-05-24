import './App.css';
import Title from './Components/Title'
import UploadForm from './Components/UploadForm.js'
import ImageGrid from './Components/ImageGrid.js'


function App() {
  return (
    <div className='App'>
    <Title />
    <UploadForm />
    <ImageGrid/>
    </div>
  );
}

export default App;
