import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'

function Header() {
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
        <nav className="hidden md:flex gap-6 text-base md:text-lg font-semibold items-center">
          <Link to="/register" className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full">註冊會員</Link>
          <Link to="/login" className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full">登入會員</Link>
          <Link to="/about" className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full">關於我們</Link>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors cursor-pointer bg-bg-secondary ${isDarkMode ? 'border border-white' : ''}`}
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
          <Link to="/register" className="px-6 py-4 border-b border-border" onClick={() => setIsMenuOpen(false)}>註冊會員</Link>
          <Link to="/login" className="px-6 py-4 border-b border-border" onClick={() => setIsMenuOpen(false)}>登入會員</Link>
          <Link to="/about" className="px-6 py-4" onClick={() => setIsMenuOpen(false)}>關於我們</Link>
        </nav>
      )}
    </header>
  )
}

export default Header
