import { Link } from 'react-router-dom'
import { SquarePen, UserRoundMinus } from 'lucide-react'

function RegistrationCard({ id, title, date, location }) {
  return (
    <div className="flex items-center border border-border rounded-2xl hover:shadow-md transition-shadow p-4 gap-4">
      <Link to={`/events/${id}`} state={{ from: 'profile' }} className="flex items-center gap-6 flex-1">
        <img src="/main.jpg" alt={title} className="w-32 h-24 object-cover rounded-xl shrink-0" />
        <div className="text-left">
          <h3 className="font-bold text-text">{title}</h3>
          <p className="text-text-secondary text-sm mt-1">{date}</p>
          <p className="text-text-secondary text-sm">{location}</p>
        </div>
      </Link>
      <div className="shrink-0 mr-4 flex items-center gap-4">
        <Link to={`/events/${id}/record`} className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white">
          我的戰績
        </Link>
        <Link to={`/events/${id}/match-schedule`} className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-2xl transition-colors hover:bg-primary hover:text-white">
          出賽表
        </Link>
        <div className="relative group">
          <button className="p-2 border border-primary text-primary rounded-[12px] transition-colors hover:bg-primary hover:text-white cursor-pointer">
            <SquarePen className="w-4 h-4" />
          </button>
          <div className="absolute right-0 top-full mt-2 w-36 bg-header border border-border rounded-[12px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-10">
            <button onClick={() => { /* TODO: 串接退出比賽 API */ }} className="w-full flex items-center gap-2 px-4 py-3 text-sm text-text-secondary hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
              <UserRoundMinus className="w-4 h-4" />
              退出比賽
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationCard
