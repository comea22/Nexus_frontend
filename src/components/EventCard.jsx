import { Trophy, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function EventCard({ id, title, date, location, image, from }) {
  return (
    <Link to={`/events/${id}`} state={from ? { from } : undefined} className="border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-md cursor-pointer block">
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-bg-secondary flex items-center justify-center">
          <Trophy className="w-10 h-10 text-text-secondary" />
        </div>
      )}
      <div className="p-4 text-left">
        <h3 className="font-bold text-text">{title}</h3>
        <p className="text-text-secondary text-sm mt-1 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{date}</p>
        {location && <p className="text-text-secondary text-sm flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{location}</p>}
      </div>
    </Link>
  )
}

export default EventCard
