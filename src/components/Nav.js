import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  function changeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      // dark => light
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
    } else {
      // light => dark
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <nav className="sticky top-0 z-10 flex justify-center items-center h-14 bg-white dark:bg-gray-800 dark:text-white">
      <h1 className="grow pl-4 text-slate-800 dark:text-white">
        <a href="/">My blog</a>
      </h1>

      <div className="left-group">
        <button>메뉴</button>
      </div>

      <div className="right-group flex pr-4">
        <button className="mr-3" onClick={changeTheme} type="button">
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
        <button className="mr-3" type="button">
          Write
        </button>
        <button className="mr-3 overflow-hidden" type="button">
          <img
            className="w-8 rounded-full"
            src="../../assets/profile.jpg"
            alt="profile image"
          />
        </button>
      </div>
    </nav>
  )
}

export default Nav
