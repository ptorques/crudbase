import { Link } from 'react-router-dom'
import './styles.css'

function Screen1() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Link to={"/screen2"}>
          <button>
            ir pra tela 2
          </button>
        </Link>
      </div>
    </>
  )
}

export default Screen1
