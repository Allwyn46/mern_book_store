import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard'

const FavouriteBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/get_all_books").then(res => res.json()).then(data => setBooks(data))
    }, [])
    return (
        <div>
            <BookCard books={books} headline="Best Sellers" />
        </div>
    )
}

export default FavouriteBooks