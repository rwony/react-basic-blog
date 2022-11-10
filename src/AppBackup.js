import { useState } from 'react'
import './App.css'
import List from './components/List'
import Modal from './components/Modal'

function App() {
  const logo = 'Ryeowon′s Blog'

  const dummyData = [
    {
      id: 0,
      title: '프론트엔드',
      desc: '프론트엔드 개발자가 되고싶어요',
      date: '2022/11/09',
      like: 0,
    },
    {
      id: 1,
      title: '나의 github',
      desc: 'https://github.com/rwony/react-basic-blog',
      date: '2022/11/09',
      like: 0,
    },
    {
      id: 2,
      title: '이건 뭘까요?',
      desc: '리액트로 간단하게 만드는 블로그 사이트입니다.',
      date: '2022/11/09',
      like: 0,
    },
  ]

  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          <a href="/">{logo}</a>
        </h4>
      </div>

      <List data={dummyData} modal={modal} />

      {modal ? <Modal /> : ''}
    </div>
  )
}

export default App
