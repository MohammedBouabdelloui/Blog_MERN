import { Link, Outlet } from "react-router-dom"

const Header =()=>{
    return(<>
        <header>
          <a href='#' className='logo'>logo</a>
        
          <nav>
            <Link to='/' className="homme">Homme</Link>
            <Link to='/login' >login</Link>
            <Link to='/register' >register</Link>
          </nav>
        </header>
        <div className="contente">

            <Outlet />
        </div>
    </>)
}


export default Header