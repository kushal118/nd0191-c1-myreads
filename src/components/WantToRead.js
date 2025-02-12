import Book from "./Book";

const WantToRead = ({wantToRead,moveToShelf,getStatus}) => {
    return ( 
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {wantToRead.map((book,index)=>{
            return(
                <li key={index}>
                <Book
                    book={book}
                    onMoveToShelf ={(e)=>moveToShelf(e,book)}
                getStatus={getStatus}
                />
            
             
            </li>

            )
          })}
            
           
          </ol>
        </div>
      </div>
     );
}
 
export default WantToRead;