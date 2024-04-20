import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL } = useLoaderData();
    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h3>
                {bookTitle}
            </h3>
            <div className='h-10 w-96   '>
                <img src={imageURL} alt="" />

            </div>
        </div>
    )
}

export default SingleBook