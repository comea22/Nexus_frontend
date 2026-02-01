import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 md:py-8 flex justify-between items-center">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>

        {/* 桌面版選單 */}
        <nav className="hidden md:flex gap-6 text-base md:text-lg font-semibold">
          <Link to="/about">簡介</Link>
          <Link to="/contact">聯絡我們</Link>
          <Link to="/register">會員註冊</Link>
          <Link to="/login">會員登入</Link>
        </nav>

        {/* 漢堡按鈕 (手機版) */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 py-0.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* 手機版選單 */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col bg-white shadow-md divide-y divide-gray-200">
          <Link to="/about" className="px-6 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>簡介</Link>
          <Link to="/contact" className="px-6 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>聯絡我們</Link>
          <Link to="/register" className="px-6 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>會員註冊</Link>
          <Link to="/login" className="px-6 py-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>會員登入</Link>
        </nav>
      )}
    </header>
  )
}

export default Header
