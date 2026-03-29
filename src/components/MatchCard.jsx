function MatchCard({ round, team1, team2 }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-10">
      <h3 className="font-bold text-primary">第 {round} 場次</h3>
      <p className="text-text text-xl font-bold mt-1">{team1} vs. {team2}</p>
    </div>
  )
}

export default MatchCard
