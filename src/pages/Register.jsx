import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { OctagonX, CircleCheckBig, Eye, EyeOff } from 'lucide-react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'password' || name === 'confirmPassword') {
      if (!/^[a-zA-Z0-9]*$/.test(value)) {
        return
      }
    }

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

  const passwordRules = [
    { label: '至少 8 個字元', valid: formData.password.length >= 8 },
    { label: '至少 1 個英文字母', valid: /[a-zA-Z]/.test(formData.password) },
    { label: '不可與 Email 帳號相同', valid: formData.password && formData.email && formData.password !== formData.email.split('@')[0] },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('請填寫所有必填欄位')
      return
    }

    if (!isValidEmail(formData.email)) {
      toast.error('請輸入有效的 Email 格式')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('密碼與確認密碼不一致')
      return
    }

    // TODO: 串接註冊 API
    toast.success('註冊成功')
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-left">
      <h1 className="text-3xl font-bold text-center mb-8">會員註冊</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center">
          <label htmlFor="name" className="w-28 text-sm font-medium shrink-0">
            姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="請輸入姓名"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="email" className="w-28 text-sm font-medium shrink-0">
          電子信箱 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="請輸入 Email"
          />
        </div>

        <div className="flex">
          <label htmlFor="password" className="w-28 text-sm font-medium shrink-0 pt-2">
            密碼 <span className="text-red-500">*</span>
          </label>
          <div className="flex-1">
            <div className="relative">
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
            <ul className="mt-2 text-sm list-none text-left space-y-1">
              {passwordRules.map((rule, index) => (
                <li key={index} className={`flex items-center gap-2 ${rule.valid ? 'text-green-600' : 'text-gray-500'}`}>
                  {rule.valid ? (
                    <CircleCheckBig className="w-4 h-4" />
                  ) : (
                    <OctagonX className="w-4 h-4" />
                  )}
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex">
          <label htmlFor="confirmPassword" className="w-28 text-sm font-medium shrink-0 pt-2">
            確認密碼 <span className="text-red-500">*</span>
          </label>
          <div className="flex-1">
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="請再次輸入密碼"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
              </button>
            </div>
            {formData.confirmPassword && formData.password && formData.confirmPassword === formData.password && (
              <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
                <CircleCheckBig className="w-4 h-4" />
                密碼驗證相同
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="birthday" className="w-28 text-sm font-medium shrink-0">
            出生年月日
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors cursor-pointer mt-6"
        >
          註冊
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        已經有帳號？
        <Link to="/login" className="text-blue-600 ml-1 underline underline-offset-6 hover:text-blue-800">
          立即登入
        </Link>
      </div>
    </div>
  )
}

export default Register
