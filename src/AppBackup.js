import { useState } from 'react'
import './App.css'

function App() {
  const logo = 'Ryeowon′s Blog'

  const [title, setTitle] = useState([
    '코트 추천',
    '다이어트',
    '졸음을 쫓는 법',
  ])
  const [like, setLike] = useState([0, 0, 0])
  const [modal, setModal] = useState(false)
  const [itemTitle, setItemTitle] = useState(0)
  const [inputText, setInputText] = useState('')

  function openModal() {
    setModal(!modal)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          <a href="/">{logo}</a>
        </h4>
      </div>

      {title.map((it, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setItemTitle(i)
                openModal()
              }}
            >
              {it}
            </h4>

            <div className="button-group">
              <div className="like-group">
                <span
                  onClick={() => {
                    let copy = [...like]
                    copy[i] = copy[i] + 1
                    setLike(copy)
                  }}
                  className="like-button"
                >
                  👍
                </span>
                <strong>{like[i]}</strong>
              </div>

              <button
                onClick={() => {
                  let copy = [...title]
                  let liked = [...like]
                  const newTitleList = copy.filter((it) => it !== copy[i])
                  const newLike = liked.filter((it) => it !== liked[i])
                  console.log(newLike)
                  setTitle(newTitleList)
                  setLike(newLike)
                }}
                className="delete-button"
                type="button"
              >
                삭제
              </button>
            </div>
            <p className="issue">11월 9일 발행</p>
          </div>
        )
      })}

      <div className="input-group">
        <input
          className="input-msg"
          type="text"
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            let copy = [...title]

            if (inputText !== undefined && inputText !== '') {
              copy.unshift(inputText)
              setTitle(copy)
              setLike([...like, 0])
              setInputText('')
              document.querySelector('.input-msg').value = ''
            } else {
              alert('내용을 입력해주세요')
            }
          }}
          type="button"
        >
          작성
        </button>
      </div>

      {modal ? (
        <Modal title={title} itemTitle={itemTitle} setTitle={setTitle} />
      ) : null}
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.itemTitle]}</h4>
      <p>작성일자</p>
      <p>내용</p>
      <button
        onClick={() => {
          let copy = [...props.title]
          copy[props.itemTitle] = '너무 배불러!'
          props.setTitle(copy)
        }}
        type="button"
      >
        글수정
      </button>
    </div>
  )
}

export default App
