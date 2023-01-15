import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
