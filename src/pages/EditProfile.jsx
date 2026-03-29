import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { ChevronLeft, Camera, Upload } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function EditProfile() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    birthday: user?.birthday || '',
  })
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || null)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 串接更新個人資料 API
    navigate('/profile')
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link to="/profile" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white w-fit mb-8">
        <ChevronLeft className="w-4 h-4" />
        返回個人檔案
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-text text-center mb-8">編輯個人檔案</h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-16">
        {/* 左側：頭貼 */}
        <div className="flex flex-col items-center justify-center shrink-0 bg-bg-secondary rounded-2xl p-12 w-80 min-h-70">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center cursor-pointer group"
          >
            {avatarPreview ? (
              <img src={avatarPreview} alt="頭貼" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-white text-3xl font-bold">{user?.name?.charAt(0)}</span>
            )}
            <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                setAvatarPreview(URL.createObjectURL(file))
              }
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-4 flex items-center gap-1.5 px-6 py-3 text-sm border border-primary text-primary rounded-2xl font-medium transition-colors hover:bg-primary hover:text-white cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            上傳頭貼
          </button>
          <p className="text-xs text-text-secondary mt-4 text-center">僅支援 JPG、PNG 格式<br />檔案大小不超過 2MB</p>
        </div>

        {/* 右側：表單欄位 */}
        <div className="flex-1 h-70 flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-text w-16 shrink-0">姓名</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-border rounded-2xl bg-bg text-text focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-text w-16 shrink-0">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-border rounded-2xl bg-bg text-text focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-text w-16 shrink-0">生日</label>
            <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-border rounded-2xl bg-bg text-text focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="flex-1 px-6 py-3 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white cursor-pointer"
            >
              取消變更
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 text-sm font-medium text-white rounded-2xl btn-primary cursor-pointer"
            >
              儲存變更
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
