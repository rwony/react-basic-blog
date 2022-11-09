import { useState } from 'react'
import './App.css'

function App() {
  const logo = 'Ryeowon′s Blog'

  const [title, setTitle] = useState([
    '코트 추천',
    '다이어트',
    '졸음을 쫓는 법',
  ])
  const [like, setLike] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          <a href="/">{logo}</a>
        </h4>
      </div>

      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            setLike(like + 1)
          }}
          className="like-button"
        >
          👍
          <strong>{like}</strong>
        </span>
        <p className="issue">11월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <span
          onClick={() => {
            setLike(like + 1)
          }}
          className="like-button"
        >
          👍
          <strong>{like}</strong>
        </span>
        <p className="issue">11월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <span
          onClick={() => {
            setLike(like + 1)
          }}
          className="like-button"
        >
          👍
          <strong>{like}</strong>
        </span>
        <p className="issue">11월 9일 발행</p>
      </div>

      <Modal />
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>작성일자</p>
      <p>내용</p>
    </div>
  )
}

export default App
