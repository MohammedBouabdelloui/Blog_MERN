import { Link, Outlet } from "react-router-dom"
import { Route_Logine, Route_Register } from "../route"

const Header =()=>{
    return(<>
        <header>
          <a href='#' className='logo'>logo</a>
        
          <nav>
            <Link to='/' className="homme">Homme</Link>
            <Link to={Route_Logine} >login</Link>
            <Link to={Route_Register} >register</Link>
          </nav>
        </header>
        <div className="contente">

            <Outlet />
        </div>
    </>)
}


export default Header