
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import './assets/CSS/style.css'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>

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
