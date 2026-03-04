import { useNavigate } from 'react-router-dom'
import cl from './header.module.css'
import darkThemeIcon from '../../assets/dark_theme_icon.png'

export const Header = () => {
  const navigate = useNavigate()

  const handleNavigate = (link: string): void => {
    navigate(`http://localhost:5173/${link}`)
  }

  return (
    <div className={cl.container}>
      <div className={cl.navigationContainer}>
        <img
          onClick={() => handleNavigate('profile')}
          className={cl.avatar}
          src="https://i.pinimg.com/736x/9c/95/3c/9c953c1bb3bb3598900a314cd9c2c0a5.jpg"
          alt="avatar"
        />
        <div className={cl.line} />
        <button
          className={cl.buttonActive}
          onClick={() => handleNavigate('dashboard')}
        >
          Dashboard
        </button>
        <button className={cl.button} onClick={() => handleNavigate('sales')}>
          Sales
        </button>
        <button
          className={cl.button}
          onClick={() => handleNavigate('customers')}
        >
          Customers
        </button>
        <button className={cl.button} onClick={() => handleNavigate('reports')}>
          Reports
        </button>
      </div>
      <button className={cl.themeButton}>
        <img
          className={cl.themeIcon}
          src={darkThemeIcon}
          alt="dark_theme_icon"
        />
      </button>
    </div>
  )
}
