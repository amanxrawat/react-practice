import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import Home from './components/Home.jsx'
import UpdateUser from './components/UpdateUser.jsx'
import DeleteUser from './components/DeleteUser.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/create-user",
            element: (
                <CreateUser></CreateUser>
            ),
        },
        {
            path: "/Update-user",
            element: (
                    <UpdateUser />
                
            ),
        },
        {
            path: "/delete-user",
            element: (            
                    <DeleteUser />
                
            ),
        }      
    ],
},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
