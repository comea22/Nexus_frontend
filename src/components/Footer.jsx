import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-4">
        <div className="flex gap-4 text-sm text-white">
          <Link to="/about">簡介</Link>
          <Link to="/contact">聯絡我們</Link>
          <Link to="/register">會員註冊</Link>
          <Link to="/login">會員登入</Link>
        </div>
        <p className="text-sm text-gray-500">© 2025 PingPong. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
