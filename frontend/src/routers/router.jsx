import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Home/Home"
import Shop from "../Shop/Shop"
import About from "../Components/About"
import Blogs from "../Components/Blogs"
import SingleBook from "../Components/SingleBook"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/view-book/:id',
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/view-book/${params.id}`)
            }
        ]
    }
])

export default router