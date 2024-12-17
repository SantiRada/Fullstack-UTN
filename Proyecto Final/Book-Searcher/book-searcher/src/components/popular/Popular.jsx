import './Popular.css';
import { HiStar } from "react-icons/hi";

export function Popular({ listBooks }){

    const filterBooks = listBooks.slice(0, 3);

    return (
        <section className="popular-sector">
            {
                filterBooks.map((item, index) => (
                    <div key={index} className="card-popular">
                        { item.volumeInfo.averageRating && <span>{item.volumeInfo.averageRating} <HiStar className="icon-star" /></span> }
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="Imagen de fondo" className="bg-img" />
                        <div className="card-info">
                            <p>{item.volumeInfo.authors}</p>
                            <h3>{item.volumeInfo.title}</h3>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}