import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);       //Se guardan  las imagenes consultadas
    const [isLoading, setIsLoading] = useState( true );    

    const getImages = async() => {    //Funcion que permite setear las imagenes en el hook useState
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
