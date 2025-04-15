import { BrowserRouter } from "react-router-dom"
import {Routes,Route,NavLink,Navigate} from "react-router-dom"
import logo from '../logo.svg'
import { hrtime } from "process"

export const Navigation = () => {
  return (
   <BrowserRouter>
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
        <ul>
            <li>
            <NavLink to="/home" className={ ({isActive}) => isActive? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={ ({isActive}) => isActive? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
            <NavLink to="/user" className={ ({isActive}) => isActive? 'nav-active' : ''}>Users</NavLink>
            </li>
        </ul>
        </nav>

    <Routes>
        <Route path="about" element={ <h1>AboutPage</h1> } ></Route>
        <Route path="users" element={ <h1>UsersPage</h1> } ></Route>
        <Route path="home" element={ <h1>HomePage</h1> } ></Route>

        <Route path="/*" element={<Navigate to="/home" replace/>} ></Route>
    </Routes>
    </div>
   </BrowserRouter>
)
}
