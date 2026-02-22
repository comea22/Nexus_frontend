import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Home() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: '問題一的內容在這裡？', answer: '答案一的內容在這裡，可以填寫詳細的說明文字。' },
    { question: '問題二的內容在這裡？', answer: '答案二的內容在這裡，可以填寫詳細的說明文字。' },
    { question: '問題三的內容在這裡？', answer: '答案三的內容在這裡，可以填寫詳細的說明文字。' },
    { question: '問題四的內容在這裡？', answer: '答案四的內容在這裡，可以填寫詳細的說明文字。' },
    { question: '問題五的內容在這裡？', answer: '答案五的內容在這裡，可以填寫詳細的說明文字。' },
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
                <div className="p-5 pt-0 text-text-secondary">
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
