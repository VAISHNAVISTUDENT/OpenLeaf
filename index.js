const express = require('express');
const axios = require('axios');
const path = require('path')
const app = express();
const PORT = 3000;
const API_KEY = 'your_google_api';  // Replace with your Google Books API key
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const ejsMate = require('ejs-mate');
app.engine("ejs" , ejsMate);
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));


async function SearchBooks(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        key: API_KEY,
        maxResults: 10  // Fetch a specific number of Harry Potter books
      }
    });

    const books = response.data.items;
    
    if (books) {
      const bookDetails = books.map(book => ({
        id:book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        imageLinks: book.volumeInfo.imageLinks,  // Include image links
        averageRating: parseInt(book.volumeInfo.averageRating),
        ratingsCount: book.volumeInfo.ratingsCount,
        language: book.volumeInfo.language,
        previewLink: book.volumeInfo.previewLink,
      }));
      
      
      return bookDetails;
    } else {
      return 'No Harry Potter books found.';
    }
  } catch (error) {
    return `Error fetching data from Google Books API: ${error.message}`;
  }
}

async function getBookById(bookId) {
  try {
    const response = await axios.get(`${BASE_URL}/${bookId}`, {
      params: {
        key: API_KEY,
      }
    });

    const book = response.data;
    if (book) {
      const bookDetails = {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        imageLinks: book.volumeInfo.imageLinks,  // Include image links
        averageRating: book.volumeInfo.averageRating,
        ratingsCount: book.volumeInfo.ratingsCount,
        language: book.volumeInfo.language,
        previewLink: book.volumeInfo.previewLink,
      };
      return bookDetails;
    } else {
      return 'No book found.';
    }
  } catch (error) {
    return `Error fetching data from Google Books API: ${error.message}`;
  }
}




app.get('/' , async(req,res) => {
  const harryPotter = await SearchBooks('HARRY POTTER');
  const Twilight = await SearchBooks('Twilight');
  const BerenstainBears = await SearchBooks('Berenstain Bears');
  const NancyDrew = await SearchBooks('Nancy Drew');
  const ASongofIceandFire = await SearchBooks('A Song of Ice and Fire');
  res.render("Home.ejs" , {harryPotter,Twilight,BerenstainBears,NancyDrew,ASongofIceandFire});
  // res.send(harryPotter)
});

app.get('/search', async (req, res) => {
  const query = req.query.query;
  const books = await SearchBooks(query);
  res.render('result.ejs', { books });
});
app.get('/getBooks/:id', async (req, res) => {
  const bookId = req.params.id;
  const book = await getBookById(bookId);
  res.render(  "show.ejs" ,{book});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
