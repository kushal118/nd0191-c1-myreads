import "./App.css";
import React, {
  useEffect
} from "react";
import {
  useState
} from "react";
import * as bookapi from "./BooksAPI";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  useEffect(() => {
    bookapi.getAll().then((data) => {
        const currentlyReading = data.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = data.filter((book) =>
          book.shelf === "wantToRead"
        )
        const read = data.filter((book) =>
          book.shelf === "read"
        )
        setCurrentlyReading(currentlyReading);
        setWantToRead(wantToRead);
        setRead(read)

      }

    )


  }, [])
  const moveToShelf = (e, book) => {
    const shelf = e.target.value;
    bookapi.update(book, shelf).then(data => {
      const promises = [];
      data.currentlyReading.forEach(id => {
        promises.push(bookapi.get(id))
      })
      data.wantToRead.forEach(id => {
        promises.push(bookapi.get(id))
      })
      data.read.forEach(id => {
        promises.push(bookapi.get(id))
      });
      Promise.all(promises).then(data => {
        const currentlyReading = data.filter((book) => book.shelf === "currentlyReading")
        const wantToRead = data.filter((book) => book.shelf === "wantToRead")
        const read = data.filter((book) => book.shelf === "read");
        setCurrentlyReading(currentlyReading);
        setWantToRead(wantToRead);
        setRead(read);



      });

    });
  }

  function getStatus(title) {
    const nowReading = currentlyReading.find((obj) => obj.title === title);
    const wantToReads = wantToRead.find((obj) => obj.title === title);
    const reads = read.find((obj) => obj.title === title);
    if (nowReading) {
      return "currentlyReading"
    };
    if (wantToReads) {
      return "wantToRead"
    }
    if (reads) {
      return "read"
    }

    return "none"

  }
  return ( <
    div className = "app" >
    <
    Router >
    <
    Routes >
    <
    Route path = "/"
    element = {
      <
      MainPage
      read = {
        read
      }
      moveToShelf = {
        moveToShelf
      }
      currentlyReading = {
        currentlyReading
      }
      wantToRead = {
        wantToRead
      }
      showSearchPage = {
        showSearchPage
      }
      setShowSearchpage = {
        setShowSearchpage
      }
      getStatus = {
        getStatus
      }
      />}/ >

      <
      Route path = "/search"
      element = {
        <
        SearchPage
        moveToShelf = {
          moveToShelf
        }
        getStatus = {
          getStatus
        }

        />
      }
      /> <
      /Routes> <
      /Router>



      <
      /div>
    );
  }

  export default App;