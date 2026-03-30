import { useState, useEffect, useRef } from 'react'
import { Bookmark, Trophy, History, ClipboardList, Mail, LogOut, KeyRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import RegistrationCard from '../components/RegistrationCard'

// TODO: 替換為 API 資料
const mockUser = {
  name: '王小明',
  email: 'xiaoming@example.com',
  birthday: '1995-06-15',
  avatar: null,
}

const mockEvents = {
  favorites: [
    { id: 1, title: '2025 全國桌球公開賽', date: '2025-08-15', location: '台北小巨蛋' },
    { id: 2, title: '台北市桌球邀請賽', date: '2025-09-20', location: '台北體育館' },
  ],
  registrations: [
    { id: 1, title: '2026 全國桌球公開賽', date: '2026-04-15', location: '台北小巨蛋' },
    { id: 3, title: '2026 秋季桌球聯賽', date: '2026-07-05', location: '新北市立體育場' },
  ],
  upcoming: [
    { id: 3, title: '2025 秋季桌球聯賽', date: '2025-10-05', location: '新北市立體育場' },
    { id: 4, title: '新北市桌球錦標賽', date: '2025-11-12', location: '新北市立體育館' },
  ],
  past: [
    { id: 5, title: '2025 春季桌球聯賽', date: '2025-03-10', location: '台中市體育館' },
    { id: 6, title: '高雄市桌球友誼賽', date: '2025-01-22', location: '高雄巨蛋' },
  ],
}

const tabs = [
  { key: 'registrations', label: '我的報名紀錄', icon: ClipboardList },
  { key: 'favorites', label: '我的收藏', icon: Bookmark },
  { key: 'upcoming', label: '最新賽事', icon: Trophy },
  { key: 'past', label: '過去賽事', icon: History },
]

function Profile() {
  const [activeTab, setActiveTab] = useState('registrations')
  const sectionRefs = useRef({})
  const user = mockUser

  const scrollToSection = (key) => {
    setActiveTab(key)
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    for (const key of Object.keys(mockEvents)) {
      const el = sectionRefs.current[key]
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-16">
      {/* 左側：個人資訊 + Tab 切換 */}
      <div className="md:w-64 shrink-0">
        {/* 個人資訊區 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold shrink-0">
            {user.name.charAt(0)}
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold text-text">{user.name}</h1>
            <p className="text-text-secondary text-sm">{user.email}</p>
            <p className="text-text-secondary text-sm">
              生日：{user.birthday}
            </p>
          </div>
        </div>

        <Link to="/profile/edit" className="w-full mb-6 px-4 py-1.5 text-sm border border-primary text-primary rounded-2xl font-medium transition-colors hover:bg-primary hover:text-white cursor-pointer block text-center">
          編輯個人檔案
        </Link>

        {/* Tab 切換 */}
        <div className="flex flex-row md:flex-col border-b md:border-b-0 border-border">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`flex-1 md:flex-none flex items-center gap-2 py-3 md:px-2 justify-center md:justify-start text-sm font-medium transition-colors cursor-pointer ${
                activeTab === key
                  ? 'text-primary bg-bg-secondary rounded-[16px]'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <hr className="border-border my-4" />

        <div className="flex flex-row md:flex-col gap-1">
          <Link to="/change-password" className="flex-1 md:flex-none flex items-center gap-2 py-3 md:px-2 justify-center md:justify-start text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
            <KeyRound className="w-4 h-4" />
            變更密碼
          </Link>
          <button onClick={() => { /* TODO: 串接登出 API */ }} className="flex-1 md:flex-none flex items-center gap-2 py-3 md:px-2 justify-center md:justify-start text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" />
            登出
          </button>
          <hr className="border-border my-2" />
          <Link to="/contact" className="flex-1 md:flex-none flex items-center gap-2 py-3 md:px-2 justify-center md:justify-start text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
            聯絡我們
          </Link>
        </div>
      </div>

      {/* 右側：所有區域 */}
      <div className="flex-1 space-y-10">
        {tabs.map(({ key, label }) => (
          <section
            key={key}
            id={key}
            ref={(el) => (sectionRefs.current[key] = el)}
            className="scroll-mt-32"
          >
            <h2 className="text-xl font-bold text-text mb-4 text-left border-l-4 border-primary pl-3">{label}</h2>
            {key === 'registrations' ? (
              <div className="flex flex-col gap-4">
                {mockEvents[key].map((event) => (
                  <RegistrationCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockEvents[key].map((event) => (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    from="profile"
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Profile
