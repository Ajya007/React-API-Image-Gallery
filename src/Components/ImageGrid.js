
import {useState,useEffect} from 'react'



const ImageGrid = ({setModalUrl,docs,onDelete}) => {
   



 

    return (
      
        <div className="img-grid">
  
         {docs && docs.map((doc) =>
         <div style={{position:'relative'}} key={doc.id} >

           <div className='img-wrap' onClick={() => setModalUrl(doc.url)} style={{border:'3px solid black'}}>
             <img src={doc.url} alt='img'/>
           
           </div>
            <button style={{backgroundColor:'red',color:'#fff',position:'absolute',zIndex:'1',top:'0',right:'0',height:'25px',width:'90px',cursor:'pointer'}} onClick={() => onDelete(doc.id)}>delete</button>

            </div>
         )}

        </div>
    )
}

export default ImageGrid

