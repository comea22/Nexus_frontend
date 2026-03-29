import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon, Bell, CircleUserRound, Swords, User, LogOut, CalendarSearch } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function HeaderLoggedIn() {
  const { user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-header">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src={isDarkMode ? "/logo_darkmode.webp" : "/logo.webp"} alt="Logo" className="h-28 md:py-2" />
          </Link>
        </div>

        {/* 桌面版選單 */}
        <nav className="hidden md:flex gap-8 text-base md:text-lg font-semibold items-center">
          <Link to="/events" className="flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full"><CalendarSearch className="w-5 h-5" />尋找賽事</Link>
          <Link to="/notifications" className="flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full"><Bell className="w-5 h-5" />通知</Link>
          <div className="relative group">
            <button className="flex items-center gap-1.5 cursor-pointer">
              <CircleUserRound className="w-5 h-5" />Hi，{user.name}
            </button>
            <div className="absolute right-0 top-full mt-2 w-40 bg-header border border-border rounded-[16px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <Link to="/battle-history" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-bg-secondary transition-colors"><Swords className="w-4 h-4" />對戰紀錄</Link>
              <Link to="/profile" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-bg-secondary transition-colors"><User className="w-4 h-4" />個人檔案</Link>
              <button onClick={() => { /* TODO: 串接登出 API */ }} className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-bg-secondary transition-colors cursor-pointer"><LogOut className="w-4 h-4" />登出</button>
            </div>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors cursor-pointer bg-bg-secondary ${isDarkMode ? 'border border-white' : '' }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-text-secondary" />}
          </button>
        </nav>

        {/* 手機版按鈕區 */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors cursor-pointer bg-bg-secondary ${isDarkMode ? 'border border-white' : ''}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-text-secondary" />}
          </button>
          <button
            className="flex flex-col justify-between w-6 h-5 py-0.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 transition-all duration-300 bg-text ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 bg-text ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 bg-text ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* 手機版選單 */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col shadow-md bg-header">
          <Link to="/events" className="px-6 py-4 border-b border-border flex items-center gap-1.5" onClick={() => setIsMenuOpen(false)}><CalendarSearch className="w-5 h-5" />尋找賽事</Link>
          <Link to="/profile" className="px-6 py-4 border-b border-border flex items-center gap-1.5" onClick={() => setIsMenuOpen(false)}><CircleUserRound className="w-5 h-5" />Hi，{user.name}</Link>
          <Link to="/notifications" className="px-6 py-4" onClick={() => setIsMenuOpen(false)}>通知</Link>
        </nav>
      )}
    </header>
  )
}

export default HeaderLoggedIn
