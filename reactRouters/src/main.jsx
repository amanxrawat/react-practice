import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,ContactUs, Github } from './components/index.js'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"ContactUs",
        element:<ContactUs/>
      },
      {
        path:"user/:userid",
        element: <User/>
      },
      {
        // loader:(()=>{
          // rewatch the video at 55 video 12 react router
        // }),
        path:"Github",
        element:<Github></Github>
      }
    ]
  }
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='about' element={<About></About>}/>
//       <Route path='ContactUs' element={<ContactUs></ContactUs>}/>
//       <Route path='' element={<Home/>}/>
//     </Route>
//   )
// )

// another way to create the navigation 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
