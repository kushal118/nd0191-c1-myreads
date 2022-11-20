import Book from "./Book";
const Shelf = ({ books , title, moveToShelf,getStatus }) => 
{       return (        
<div className="bookshelf">            
<h2 className="bookshelf-title">{title}</h2>            
<div className="bookshelf-books" >                
<ol className="books-grid" >                  
{books && books.map((book) => 
<Book 
book={book} 
key={book.id} 
onMoveToShelf = {(e) => moveToShelf(e, book)
          }
getStatus={getStatus}

          />)}                
</ol>            
</div>        
</div>      
);} 
export default Shelf;