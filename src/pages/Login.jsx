import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Eye, EyeOff } from 'lucide-react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'email') {
      if (/\s/.test(value)) {
        return
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      toast.error('請填寫 Email 和密碼')
      return
    }

    if (!isValidEmail(formData.email)) {
      toast.error('請輸入有效的 Email 格式')
      return
    }

    // TODO: 串接登入 API
    toast.success('登入成功')
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-left">
      <h1 className="text-3xl font-bold text-center mb-8">會員登入</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
          <label htmlFor="email" className="w-28 text-sm font-medium shrink-0">
            電子信箱
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="請輸入電子信箱"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="password" className="w-28 text-sm font-medium shrink-0">
            密碼
          </label>
          <div className="flex-1 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="請輸入密碼"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/forgot-password"
            className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-2xl font-medium hover:bg-blue-50 transition-colors"
          >
            忘記密碼
          </Link>
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            登入
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        還沒有帳號？
        <Link to="/register" className="text-blue-600 underline underline-offset-6 ml-1">
          立即註冊
        </Link>
      </div>
    </div>
  )
}

export default Login
