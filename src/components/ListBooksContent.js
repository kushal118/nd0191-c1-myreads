import Shelf from "./Shelf"
const ListBooksContant  = ({ currentlyReading , wantToRead, read,moveToShelf,getStatus}) => {    
    return (<div>            
         <div className="list-books-title">
          <h1>MyReads</h1>
            </div> 
<div className="list-books-content">
<Shelf title ="Currently Reading" books = {currentlyReading} moveToShelf = {moveToShelf} getStatus={getStatus}/>
<Shelf title ="Read" books ={read} moveToShelf = {moveToShelf} getStatus={getStatus} />
<Shelf title ="Want to read" books = {wantToRead} moveToShelf = {moveToShelf} getStatus={getStatus} />
</div>       </div>     );}
export default ListBooksContant