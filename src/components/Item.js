import { useState } from 'react'

function Item({ id, title, desc, date, like }) {
  const [count, setCount] = useState(parseInt(like))

  return (
    <div className="list">
      <h4>
        <a href="">{title}</a>
      </h4>

      <div className="like-group">
        <span
          onClick={() => {
            setCount(count + 1)
          }}
          className="like-button"
        >
          👍
        </span>
        <strong>{count}</strong>
      </div>
      <p className="issue">{date}</p>
    </div>
  )
}

export default Item
