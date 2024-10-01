import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import NotFound from './NotFound'
import Posts from './Posts'
import Post from './Post'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App
