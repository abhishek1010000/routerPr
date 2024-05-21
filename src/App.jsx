import Navbar from './Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Quote from './Components/Quote'
import Foods from "./Components/Foods"
import Contact from "./Components/Contact"
import Restaurants from './Components/Restaurant'

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar /> <Home /></> 
    },
    {
      path : "/quote",
      element : <> <Navbar /> <Quote /> </>
    },
    {
      path : "/foods",
      element : <> <Navbar /> <Foods /> </>
    },
    {
      path : "/restaurants",
      element : <> <Navbar /> <Restaurants /> </>
    },
    {
      path : "/contact",
      element : <> <Navbar /> <Contact /> </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
