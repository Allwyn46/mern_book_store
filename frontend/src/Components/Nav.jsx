import React, { useEffect, useState } from 'react'
import { nav } from '../Constants'
import { Link } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSticky, setSticky] = useState(false)

    const toggle = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 100) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0" : ""}`}>
                <div className='flex justify-between items-center'>
                    <Link to="/" className='flex font-bold text-2xl items-center gap-2'>
                        <BookOpen color='black' size={28} />
                        Book Store
                    </Link>

                    <ul className='md:flex space-x-12 hidden'>

                        {nav.map(({ link, path }) => (
                            <li key={path} className='uppercase cursor-pointer text-black hover:text-red-400'>
                                <Link to={path} cla>{link}</Link>
                            </li>
                        ))}

                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button className='w-5 hover:text-red-400'>
                            <Menu color='black' size={28} />
                        </button>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggle} className='text-black focus:outline-none'>
                            {
                                menuOpen ? <X color='black' size={28} /> : <Menu color='black' size={28} />
                            }
                        </button>
                    </div>

                    <div className={`space-y-4 px-4 mt-16 py-7 bg-black ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        <ul className=''>

                            {nav.map(({ link, path }) => (
                                <li key={path} className='block py-3 cursor-pointer text-white hover:text-red-400'>
                                    <Link to={path} cla>{link}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav

