export const getGifs = async( category ) => {   //Permite consultar a la api las imagenes por categoria

    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=3`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({  // Se costruye un objeto con los valores que se necesita
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}