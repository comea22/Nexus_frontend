import { useParams, Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MapPin, Calendar, Users, Bookmark, ClipboardPen, Share2 } from 'lucide-react'

// TODO: 替換為 API 資料
const mockEventDetails = {
  1: {
    title: '2026 全國桌球公開賽',
    team: '台北桌球隊 vs 高雄桌球隊',
    date: '2026/04/15 - 2026/04/17',
    location: '台北小巨蛋',
  },
  2: {
    title: '台北市桌球邀請賽',
    team: '信義區代表隊 vs 大安區代表隊',
    date: '2026/05/20 - 2026/05/21',
    location: '台北體育館',
  },
  3: {
    title: '2026 秋季桌球聯賽',
    team: '北區聯隊 vs 南區聯隊',
    date: '2026/07/05',
    location: '新北市立體育場',
  },
  4: {
    title: '新北市桌球錦標賽',
    team: '板橋桌球社 vs 中和桌球社',
    date: '2026/09/12 - 2026/09/14',
    location: '新北市立體育館',
  },
}

function EventDetail() {
  const { id } = useParams()
  const location = useLocation()
  const fromProfile = location.state?.from === 'profile'
  const event = mockEventDetails[id]
  const eventIds = Object.keys(mockEventDetails)
  const currentIndex = eventIds.indexOf(id)
  const nextId = currentIndex < eventIds.length - 1 ? eventIds[currentIndex + 1] : null

  if (!event) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center text-text-secondary">
        找不到此賽事
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <img
        src="/main.jpg"
        alt={event.title}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl mb-8"
      />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-text text-left">{event.title}</h1>
        <div className="flex gap-2 shrink-0">
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white cursor-pointer">
            <Share2 className="w-4 h-4" />
            分享
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white cursor-pointer">
            <Bookmark className="w-4 h-4" />
            加入收藏
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white rounded-2xl transition-colors cursor-pointer btn-primary">
            <ClipboardPen className="w-4 h-4" />
            報名比賽
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-left">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm text-text-secondary">隊名：</span>
          <span className="text-text font-medium">{event.team}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm text-text-secondary">比賽時間：</span>
          <span className="text-text font-medium">{event.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm text-text-secondary">地點：</span>
          <span className="text-text font-medium">{event.location}</span>
        </div>
      </div>

      {/* 上下頁導航 */}
      <div className="flex justify-between mt-8">
        <Link to={fromProfile ? '/profile' : '/events'} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white">
          <ChevronLeft className="w-4 h-4" />
          {fromProfile ? '返回個人檔案' : '返回賽事列表'}
        </Link>
        {!fromProfile && nextId && (
          <Link to={`/events/${nextId}`} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white">
            下一場賽事
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default EventDetail
