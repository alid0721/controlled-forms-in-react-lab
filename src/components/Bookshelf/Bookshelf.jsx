import { useState } from 'react';

function Bookshelf() {
    const [books, setBooks] = useState([]);
        
    const [newbook,setNewBook]=useState({
        title:'',
        author:''
    })
        
    const handleInputChange=(Input)=>{
        const {name,value}=Input.target
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value,
          }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
        setBooks((prevBooks) => [
          ...prevBooks,
          newBook
        ]);
    
        // Reset the form
        setNewBook({
          title: '',
          author: '',
        });
      };
    return (
        <>
            <div className="bookshelfDiv">
                <form className='formDiv' onSubmit={handleSubmit}>
                    <h3>Add a Book</h3>
                    <label htmlFor='titleInput'>Book title</label>
                    <input type="text" id='titleInput' name="titleInput" value={newbook.title} onChange={handleInputChange} />
                    <label htmlFor='authorInput'>Author</label>
                    <input type="text" id="authorInput" name="author" value={newBook.author} onChange={handleInputChange} />
                    <button type="submit">Add Book</button>
                </form >
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                        </div>
                    ))}</div>
                </div>
        </>
    )
}
export default Bookshelf