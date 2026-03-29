import { Trophy } from 'lucide-react'

function EventCard({ title, date, image }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-md cursor-pointer">
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-bg-secondary flex items-center justify-center">
          <Trophy className="w-10 h-10 text-text-secondary" />
        </div>
      )}
      <div className="p-4 text-left">
        <h3 className="font-bold text-text">{title}</h3>
        <p className="text-text-secondary text-sm mt-1">{date}</p>
      </div>
    </div>
  )
}

export default EventCard
