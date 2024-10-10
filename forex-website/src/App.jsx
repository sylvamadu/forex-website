
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import BackToTop from './Components/BackToTop/BackToTop'
// import BlogDetails from './Components/BlogComponents/BlogDetails'
// import mappBlog from '../../forex-website/src/Components/BlogComponents/BlogHome'

function App() {
 

  return (
    <>
    <div >
      <BackToTop />
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/*" element={<Error />} />
      {/* <Route  path="/blog/blog-details" element={<BlogDetails />}/> */}
      </Routes>
    </div>
    
    </>
  )
}

export default App
