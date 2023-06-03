import { createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Root from './components/Root'
import BookDetails from './components/BookDetails'
import Contact from './components/Contact'
import Booking from './components/Booking'
import Products from './components/Products'
import QuizeDetails from './components/QuizeDetails'
import ProductDetails from './components/ProductDetails'
import Category from './components/Category'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>fetch('https://fakestoreapi.com/products'),
      },
      {
        path: 'home',
        element: <Home />,
        loader: () =>fetch('https://fakestoreapi.com/products'),
      },
      
      {
           path:'/product/:id',
         element: <ProductDetails></ProductDetails>,
          loader:async({params})=>{
            return fetch(`https://fakestoreapi.com/products/${params.id}`);
          }
        },

      {
        path:'/product/:category',
        element:<Category></Category>,
        loader:async({params})=>{
          return fetch(`https://fakestoreapi.com/products/${params.category}`);
        }
      },
      
    
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: 'booking',
        element: <Booking></Booking>
      },

      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'about',
        element: <About />,
      },
     
    ],
  },
])

// export default router
