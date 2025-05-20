import Navbar from './Navbar'
import Login from './Login'
import { Link } from 'react-router-dom';


function Header() {

  const screenWidth = window.innerWidth;

  return (
    <div style={{fontFamily:'Sora, sans-serif' , backgroundColor:'#161616'}} className='flex w-full h-[12vh] text-yellow-400 text-xl justify-between items-center px-10'>
        <Link className='italic font-bold text-2xl text-shadow-2xs hover:text-yellow-400/90 hover:scale-110 transition-all duration-75' to="/" >MovieMania</Link>
        { screenWidth < 500 ? '' :
          <>
          <Navbar/>
          <Login/>
          </>
        }
    </div>
  )
}

export default Header