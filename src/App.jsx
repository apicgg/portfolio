import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Skill from './pages/Skill'
import Resume from './pages/Resume'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
