import {useEffect} from 'react';
import useStorage from './UseStorage'

function ProgressBar({file,setFile}) {
    const {url,progress} =useStorage(file)
    useEffect(() => {
       if(url){
           setFile(null)
       }
    }, [url,file])


    return (

        <div className="progress-bar" style={{width:progress + '%'}}> 

        </div>
        
    )
}

export default ProgressBar

