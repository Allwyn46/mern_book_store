import React from 'react'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* LEFT SIDE */}
                <div className='md:w-1/2 space-y-7 h-full'>
                    <h3 className='text-5xl font-bold'>Buy and Sell your Books</h3>
                    <p className='md:w-4/5'>
                        We're more than just a bookstore; we're a community hub for literary enthusiasts. Our shelves are brimming with a diverse range of books, from timeless classics to contemporary bestsellers. We believe in the transformative power of stories and aim to foster a love for reading in all our visitors.
                    </p>
                    <div className='w-1/2 flex justify-between items-center'>
                        <input type="search" id='banner_serach' name='banner_search' placeholder='Search books here...' className='px-2 py-2 rounded-md outline-none' />
                        <button className='bg-blue-950 px-6 py-2 text-white font-medium rounded-md hover:bg-slate-100 hover:text-black transition-all ease-in duration-200'>
                            Search
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h3>right side</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner