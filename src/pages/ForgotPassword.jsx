import { useState } from 'react'
import { toast } from 'sonner'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if (/\s/.test(value)) {
      return
    }
    setEmail(value)
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      toast.error('請輸入電子信箱')
      return
    }

    if (!isValidEmail(email)) {
      toast.error('請輸入有效的 Email 格式')
      return
    }

    // TODO: 串接忘記密碼 API
    console.log('忘記密碼:', email)
    toast.success('重設密碼連結已寄出')
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">請輸入電子信箱</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
          <label htmlFor="email" className="w-28 text-sm font-medium shrink-0">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="請輸入 Email"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white py-3 rounded-2xl font-medium transition-colors cursor-pointer btn-primary"
        >
          送出
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
