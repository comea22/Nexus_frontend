import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-left">
            <img src="/logo_footer.webp" alt="Logo" className="h-16 mb-3" />
            <p className="font-bold">桌球賽事管理系統</p>
            <p className="text-sm text-text-secondary">Table Tennis Tourney Tracker</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">條款與政策</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/privacy" className="hover:underline">隱私權政策</Link></li>
              <li><Link to="/terms" className="hover:underline">服務條款</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">會員資訊</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/register" className="hover:underline">會員註冊</Link></li>
              <li><Link to="/login" className="hover:underline">會員登入</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">關於我們</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/about" className="hover:underline">簡介</Link></li>
              <li><a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-text-secondary text-center border-t border-border pt-8">
          © 2026 Table Tennis Tourney Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
