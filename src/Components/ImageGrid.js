import useFirestore from './useFirestore.js'


const ImageGrid = () => {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className="img-grid">
  
         {docs && docs.map((doc) =>

           <div className='img-wrap' key={doc.id}>
             <img src={doc.url} alt='img'/>
           </div>

         
         )}

        </div>
    )
}

export default ImageGrid

