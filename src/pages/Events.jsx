import { useState } from 'react'
import { Search, Check, BadgeAlert, ArrowDownUp, BrushCleaning } from 'lucide-react'
import EventCard from '../components/EventCard'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import zhTW from 'date-fns/locale/zh-TW'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'

const locales = { 'zh-TW': zhTW }

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
})

// TODO: 替換為 API 資料
const mockEvents = [
  {
    id: 1,
    title: '2026 全國桌球公開賽',
    location: '台北小巨蛋',
    start: new Date(2026, 3, 15),
    end: new Date(2026, 3, 17),
  },
  {
    id: 2,
    title: '台北市桌球邀請賽',
    location: '台北體育館',
    start: new Date(2026, 4, 20),
    end: new Date(2026, 4, 21),
  },
  {
    id: 3,
    title: '2026 秋季桌球聯賽',
    location: '新北市立體育場',
    start: new Date(2026, 6, 5),
    end: new Date(2026, 6, 5),
  },
  {
    id: 4,
    title: '新北市桌球錦標賽',
    location: '新北市立體育館',
    start: new Date(2026, 8, 12),
    end: new Date(2026, 8, 14),
  },
]

const messages = {
  today: '今天',
  previous: '上一頁',
  next: '下一頁',
  month: '月',
  week: '週',
  day: '日',
  agenda: '議程',
  date: '日期',
  time: '時間',
  event: '賽事',
  noEventsInRange: '此範圍內無賽事',
}

function Events() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentView, setCurrentView] = useState('month')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortAsc, setSortAsc] = useState(false)
  const [filterAll, setFilterAll] = useState(false)
  const [filterRegistered, setFilterRegistered] = useState(false)
  const [filterFavorites, setFilterFavorites] = useState(false)

  const filteredEvents = mockEvents
    .filter((event) => event.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => sortAsc ? b.start - a.start : a.start - b.start)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-text mb-6 text-center">
        <span className="border-b-4 border-primary pb-1 mb-2 inline-block">尋找賽事</span>
      </h1>

      <div className="h-[450px] bg-bg rounded-2xl">
        <Calendar
          localizer={localizer}
          events={mockEvents}
          startAccessor="start"
          endAccessor="end"
          date={currentDate}
          view={currentView}
          onNavigate={setCurrentDate}
          onView={setCurrentView}
          messages={messages}
          culture="zh-TW"
          style={{ height: '100%' }}
        />
      </div>

      {/* 搜尋框 + 篩選按鈕 */}
      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="請輸入賽事名稱或地點"
            className="w-full pl-10 pr-4 py-2 border border-border rounded-2xl bg-bg text-text focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterAll(!filterAll)}
            className={`w-28 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium rounded-2xl transition-colors cursor-pointer ${
              filterAll
                ? 'btn-primary text-white'
                : 'border border-border text-text-secondary hover:text-text'
            }`}
          >
            {filterAll && <Check className="w-4 h-4 shrink-0" />}
            所有地點
          </button>
          <button
            onClick={() => setFilterRegistered(!filterRegistered)}
            className={`w-28 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium rounded-2xl transition-colors cursor-pointer ${
              filterRegistered
                ? 'btn-primary text-white'
                : 'border border-border text-text-secondary hover:text-text'
            }`}
          >
            {filterRegistered && <Check className="w-4 h-4 shrink-0" />}
            已報名
          </button>
          <button
            onClick={() => setFilterFavorites(!filterFavorites)}
            className={`w-28 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium rounded-2xl transition-colors cursor-pointer ${
              filterFavorites
                ? 'btn-primary text-white'
                : 'border border-border text-text-secondary hover:text-text'
            }`}
          >
            {filterFavorites && <Check className="w-4 h-4 shrink-0" />}
            我的收藏
          </button>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className={`px-4 py-2 rounded-2xl transition-colors cursor-pointer ${
              sortAsc
                ? 'btn-primary text-white'
                : 'border border-border text-text-secondary hover:text-text'
            }`}
          >
            <ArrowDownUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setSearchQuery('')
              setFilterAll(false)
              setFilterRegistered(false)
              setFilterFavorites(false)
              setSortAsc(false)
            }}
            className="px-4 py-2 rounded-2xl border border-border text-text-secondary hover:text-text transition-colors cursor-pointer"
          >
            <BrushCleaning className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 賽事列表 */}
      {filteredEvents.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={format(event.start, 'yyyy/MM/dd')}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-3 text-text-secondary">
          <BadgeAlert className="w-10 h-10" />
          <p className="text-sm">目前沒有符合條件的賽事</p>
        </div>
      )}

    </div>
  )
}

export default Events
