import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              
              <li>
                <NavLink 
                  to="/register" 
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  Register
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/formikbasic" 
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  FormikBasicPage
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/formikyup" 
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  FormikYupPage
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  About
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/users" 
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  Users
                </NavLink>
              </li>
              
            </ul>
          </nav>
  
          <Routes>
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="/formikbasic" element={ <FormikBasicPage/> } />
            <Route path="/formikyup" element={ <FormikYupPage/> } />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </div>
      </Router>
    );
  }