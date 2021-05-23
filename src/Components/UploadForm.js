
import {useState} from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file,setFile] = useState(null);
    const [error,setError]= useState(null);
    const types= ['image/png','image/jpeg'];

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile('')
            setError('Please select an image(jpeg or png)')

        }
    }
    return (
        <>
       <form>
           <div className="form-handler"> 
           <label htmlFor="plus" className="plus-btn">+</label>
            <input id="plus" type='file' onChange={changeHandler}/>
            </div>

           <div className="output">
               {error && <div className='error'>{error}</div>}
               {file && <div className='file-name'>{file.name}</div>}
               {file && <ProgressBar file={file} setFile={setFile}/>}
              
           </div>
       </form>
       </>
    )
}

export default UploadForm
