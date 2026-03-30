import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Home() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: '請問一定要成為會員才可以報名比賽嗎？', answer: '是的，一定要註冊成爲會員（成為龍濱桌協的一員），才可以報名比賽，並享有管理個人賽事、編輯比賽狀態等服務。' },
    { question: '請問我該如何成為龍濱桌協的成員呢？', answer: '入會需繳納會費，若有興趣，歡迎聯繫 XXX，或者於每週四親臨龍濱桌協詢問。' },
    { question: '我還想問其他問題，該如何詢問？', answer: '歡迎來信至 example@gmail.com，我們會盡快回信。' },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main>
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
        <button className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-secondary px-5 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl text-base md:text-xl font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.8)] hover:opacity-80 hover:-translate-y-[calc(50%+4px)] transition-transform cursor-pointer">
          尋找賽事
        </button>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block pb-4 border-b-6 border-primary">功能簡介</h2>
        </div>
        <div>
          <img
            src="https://placehold.co/1200x400"
            alt="功能簡介"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block pb-4 border-b-6 border-primary">報名流程</h2>
        </div>
        <div>
          <img
            src="https://placehold.co/1200x400"
            alt="報名流程"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block pb-4 border-b-6 border-primary">Q&A</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-bg-secondary hover:opacity-80 transition-colors cursor-pointer"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 mt-4 text-text-secondary text-left">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
