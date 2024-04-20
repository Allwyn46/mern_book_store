import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard'

const BestSellers = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/get_all_books").then(res => res.json()).then(data => setBooks(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <BookCard books={books} headline="Best Sellers" />
        </div>
    )
}

export default BestSellers