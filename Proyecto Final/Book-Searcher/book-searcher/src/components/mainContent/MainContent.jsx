import './MainContent.css';
import { HiStar } from "react-icons/hi";

export function MainContent({ recommendedBooks }){

    let maxRating = 0;
    let maxBook = null;

    for(let book of recommendedBooks){
        console.log(book.volumeInfo.averageRating);
        if(book.volumeInfo.averageRating > maxRating) {
            maxRating = book.volumeInfo.averageRating;
            maxBook = book;
        }

        if(maxRating == 0) { maxBook = book; }
    }

    let description, separate, date = null;

    if(maxBook){
        description = maxBook.volumeInfo.description.slice(0, 220) + "...";

        separate = maxBook.volumeInfo.publishedDate.split('-');
    
        date = separate[2] + " / " + separate[1] + " / " + separate[0];
    }

    return(
        <main>
            { maxBook != null &&
            <>
                <div className="left-content">
                    <img className="img" src={maxBook.volumeInfo.imageLinks.smallThumbnail} alt="imagen" />
                    <div className="container">
                        <h2>{maxBook.volumeInfo.title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <ul className="right-content">
                    { maxBook.volumeInfo.averageRating && <li>{maxBook.volumeInfo.averageRating} <HiStar className="icon-star" /></li>}
                    <li>{maxBook.volumeInfo.pageCount} Páginas</li>
                    <li>{date}</li>
                    <li className="author">{maxBook.volumeInfo.publisher}</li>
                </ul>
            </>
            }
        </main>
    );
}