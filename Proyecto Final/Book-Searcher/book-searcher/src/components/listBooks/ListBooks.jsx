import './ListBooks.css';

export function ListBooks({ listBooks }){
    return(
        <>
            <h4>Listado de Recomendaciones</h4>
            <section className="list-books">
                { listBooks.map((item, index) => (
                    <div key={index} className="card-book">
                        <img className="img-book" src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                        <h3 className="title-book">{item.volumeInfo.title}</h3>
                        <p className="number-book">{item.volumeInfo.publisher}</p>
                    </div>
                ))
                }
            </section>
        </>
    );
}