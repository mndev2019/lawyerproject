
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import './assets/CSS/style.css'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home/>} />

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
