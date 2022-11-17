import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
import { Link } from "react-router-dom";

const MainPage = ({
    read,
    currentlyReading,
    wantToRead,
    moveToShelf,
    getStatus,
    
  }) => {

    return ( <
      div className = "list-books" >
      <
      div className = "list-books-title" >
      <h1> MyReads </h1> 
      </div> <
      div className = "list-books-content" >
      <
      div >
      <
      CurrentlyReading moveToShelf = {
        moveToShelf
      }
      currentlyReading = {
        currentlyReading
      }
      getStatus = {getStatus}
      />

      <
      WantToRead wantToRead = {
        wantToRead
      }
      moveToShelf = {
        moveToShelf
      }
      getStatus = {
        getStatus
      }
      /> <
      Read read = {
        read
      }
      moveToShelf = {
        moveToShelf
      }
      getStatus = {
        getStatus
      }
      /> 
      </div> 
      </div>
      <div className = "open-search" >
      <Link to="/search">Add a book</Link> 
      </div> 
      </div> );
    }

    export default MainPage;