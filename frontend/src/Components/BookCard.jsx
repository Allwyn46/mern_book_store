import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ShoppingCart } from 'lucide-react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BookCard = ({ headline, books }) => {
    return (
        <div className='my-16 px-4 lg:px-24'>
            <h1 className='text-5xl font-bold text-center text-black my-5'>
                {headline}
            </h1>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {books.map(book => <SwiperSlide key={book._id}>
                        <Link to={`/single-book/${book._id}`}>
                            <div className='relative'>
                                <img src={book.imageURL} alt="" />
                                <div className='absolute top-3 right-3 bg-blue-500 hover:bg-black p-2 rounded'>
                                    <ShoppingCart color='white' className='w-4 h-4' />
                                </div>
                            </div>
                            <div>
                                <h3>{book.bookTitle}</h3>
                                <p>{book.authorName}</p>
                            </div>
                            <div>
                                <p>$10.00</p>
                            </div>
                        </Link>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default BookCard