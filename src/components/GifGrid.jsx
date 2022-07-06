import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {  //pasamos props de forma destructurada

    const { images, isLoading } = useFetchGifs( category );  // es un hook custom que permite traer informacion de las imagenes por categoria
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (   // Por cada categoria pinta las imagenes 
                        <GifItem                   // Por cada elemento crea un gifItem
                            key={ image.id } 
                            { ...image }       // le envio todo el objeto 
                        />
                    ))
                }
            </div>
        </>
    )
}
