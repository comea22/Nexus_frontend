import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Download } from 'lucide-react'
import MatchCard from '../components/MatchCard'

// TODO: 替換為 API 資料
const mockSchedules = {
  1: {
    title: '2026 全國桌球公開賽',
    matches: [
      { round: 1, team1: '台北桌球隊', team2: '高雄桌球隊' },
      { round: 2, team1: '台北桌球隊', team2: '新北桌球隊' },
      { round: 3, team1: '台北桌球隊', team2: '台中桌球隊' },
      { round: 4, team1: '台北桌球隊', team2: '台南桌球隊' },
    ],
  },
  3: {
    title: '2026 秋季桌球聯賽',
    matches: [
      { round: 1, team1: '北區聯隊', team2: '南區聯隊' },
      { round: 2, team1: '北區聯隊', team2: '中區聯隊' },
    ],
  },
}

function MatchSchedule() {
  const { id } = useParams()
  const schedule = mockSchedules[id]

  if (!schedule) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center text-text-secondary">
        找不到出賽表資料
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <Link to="/profile" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white">
          <ChevronLeft className="w-4 h-4" />
          返回個人檔案
        </Link>
        <button onClick={() => { /* TODO: 串接 PDF 下載 */ }} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white cursor-pointer">
          <Download className="w-4 h-4" />
          下載 PDF
        </button>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-text text-center mb-8">{schedule.title} — 出賽表</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedule.matches.map((match) => (
          <MatchCard
            key={match.round}
            round={match.round}
            team1={match.team1}
            team2={match.team2}
          />
        ))}
      </div>
    </div>
  )
}

export default MatchSchedule
