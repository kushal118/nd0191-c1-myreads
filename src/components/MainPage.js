import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
const MainPage = ({
    read,
    currentlyReading,
    wantToRead,
    moveToShelf,
    getStatus,
    showSearchPage,
    setShowSearchpage
  }) => {

    return ( <
      div className = "list-books" >
      <
      div className = "list-books-title" >
      <
      h1 > MyReads < /h1> <
      /div> <
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
      getStatus = {
        getStatus}
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
      /> <
      /div> <
      /div> <
      div className = "open-search" >
      <
      a onClick = {
        () => setShowSearchpage(!showSearchPage)
      } > Add a book < /a> <
      /div> <
      /div> );
    }

    export default MainPage;