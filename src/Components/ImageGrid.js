import useFirestore from './useFirestore.js'


const ImageGrid = ({setModalUrl}) => {
    const { docs } = useFirestore('images')
 

    return (
      
        <div className="img-grid">
  
         {docs && docs.map((doc) =>

           <div className='img-wrap' key={doc.id} onClick={() => setModalUrl(doc.url)}>
             <img src={doc.url} alt='img'/>
         
           </div>

         
         )}

        </div>
    )
}

export default ImageGrid

