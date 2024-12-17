import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from './components/header/Header';
import { MainContent } from './components/mainContent/MainContent';
import { Popular } from './components/popular/Popular';
import { ListBooks } from './components/listBooks/ListBooks';

const API_KEY = "AIzaSyC9kslaf_W3NNUNjfSjjaZ6dFC676GFep4";
const API_URL = `https://www.googleapis.com/books/v1/volumes`;

function App() {

  const [search, setSearch] = useState('');

  const [listBooks, setListBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const fetchBooks = async () => {
      try {
          const response = await axios.get(API_URL, {
              params: {
                  q: search,
                  key: API_KEY,
                  lang: "es",
              },
          });
          setListBooks(response.data.items);
      } catch (error) {
          console.error("Error al obtener los libros:", error);
          setListBooks([]);
      }
  };

  useEffect(() => {
      const initialBooks = async () => {
          try {
              const response = await axios.get(API_URL, {
                  params: {
                      q: 'a',
                      key: API_KEY
                  },
              });
              console.log("Recomendados:", response.data.items);
              setRecommendedBooks(response.data.items);
          } catch (error) {
              console.error("Error al obtener los libros:", error);
              setRecommendedBooks([]);
          }
      };

      initialBooks();
  }, []);

  const setSearchClic = (e) => { setSearch(e); }

  return (
    <>
      <Header setSearch={setSearchClic} search={search} fetchBooks={fetchBooks} listBooks={listBooks}  />
      <MainContent recommendedBooks={recommendedBooks} />
      { listBooks.length > 0 &&
        <>
          <Popular listBooks={listBooks} />
          <ListBooks listBooks={listBooks} />
        </>
      }
    </>
  )
}

export default App
