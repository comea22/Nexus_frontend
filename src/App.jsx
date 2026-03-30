import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeaderLoggedIn from './components/HeaderLoggedIn'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import MatchSchedule from './pages/MatchSchedule'
import EditProfile from './pages/EditProfile'
import ScrollToTop from './components/ScrollToTop'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {isLoggedIn ? <HeaderLoggedIn /> : <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/:id/match-schedule" element={<MatchSchedule />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
