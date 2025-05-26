import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import History from './pages/History.tsx'
import PalmLeaves from './pages/PalmLeaves.tsx'
import BlogPage from './pages/BlogPage.tsx'
import Gallery from './pages/Gallery.tsx'
import Contact from './pages/Contact.tsx'
import ContactPage from './pages/ContactUs.tsx'
import ViewBlogPost from './pages/ViewBlogPost.tsx'
import BlockMap from './component/common/BlockMap.tsx'

// rotues
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/history",
    element: <History />,

  },
  {
    path: "/palm",
    element: <PalmLeaves />,

  },
  {
    path: "/blog",
    element: <BlogPage />,

  },
  {
    path: "/gallery",
    element: <Gallery />,

  },
  {
    path: "/contact",
    element: <ContactPage />,

  },
  {
    path: "/viewblog/:id",
    element: <ViewBlogPost />,
  },
  {
    path: "/blockmap",
    element: <BlockMap />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
