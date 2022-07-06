import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {  //funcion que es pasada por props para ser emitida

    const [ inputValue, setInputValue ] = useState('');    //Permite guardar el valor de lo que se escribe

    const onInputChange = ({ target }) => {     
        setInputValue( target.value );                     //Permite guardar el valor de lo que se escribe
    }

    const onSubmit = ( event ) => {                        //Cuando se envia el formulario se hace una validacio y emite la funcion 
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (e) => onInputChange(e) }
            />
        </form>
    )
}
