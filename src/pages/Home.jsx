function Home() {
  return (
    <div className="relative h-[400px] md:h-[700px] overflow-hidden">
      {/* 模糊背景 (桌面版才顯示) */}
      <img
        src="/main.jpg"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover blur-xl scale-110"
      />
      {/* 主圖：手機版 cover 填滿，桌面版 contain 正常比例 */}
      <img
        src="/main.jpg"
        alt="首頁圖片"
        className="relative w-full h-full object-cover md:object-contain md:w-auto md:mx-auto"
      />
      <button className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl text-base md:text-xl font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.8)] hover:bg-gray-100 hover:-translate-y-[calc(50%+4px)] transition-transform cursor-pointer">
        尋找賽事
      </button>
    </div>
  )
}

export default Home
