

export const GifItem = ({ title, url, id }) => {  // Pasa props para pintar la url , el title

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
