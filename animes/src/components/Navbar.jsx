import { Link } from "react-router-dom"
import '../styles/Navbar.sass'
import {AiOutlineHome, AiTwotoneHome, AiFillPlaySquare} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div id="container-nav">
      <Link to='/'></Link>
      <Link to='/'>Home</Link>
      <Link to='Explorar'>Explorar</Link>
      <Link to='Movie'>Movies</Link>
      <div>
         
      </div>
    </div>
  )
}

export default Navbar