import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFonudPage from './Components/NotFonudPage/NotFonudPage'

function App() {
const router = createBrowserRouter([

  {path:"",element:<Layout/>, children:[
    {path:"",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"*",element:<NotFonudPage/>},
  ]
  },
])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
