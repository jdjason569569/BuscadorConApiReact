import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ listCategories, setCategories ] = useState([]);  //permite guardar las categorias que se vayan consultando
    
    const onAddCategory = ( newCategory ) => {    //Evento que permite agregar una nueva categoria al array de categorias
        if ( listCategories.includes(newCategory) ) return;
        setCategories([ newCategory, ...listCategories ]);   //se usa el hook para agregar una nueva categoria por medio del operador rest
    }
    
    return (
        <>
            <h1>Busca tus gif</h1>
            <AddCategory                //Componente que permite ingresar las categorias
                onNewCategory={ (value) => onAddCategory(value) }   //se pasa por props la funcion que luego se va a emitir desde este compoenente
            />
            { 
                listCategories.map( ( category ) => (  //Se recorre la lista con un map por cada elemento se crea un componente GifGrid
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}
