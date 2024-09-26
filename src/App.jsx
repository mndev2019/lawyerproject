
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import './assets/CSS/style.css'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Career from './Pages/Career'
import About from './Pages/About'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/about-us' element={<About/>}/>

      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={ThemeRoute}/>
    </>
  )
}

export default App
