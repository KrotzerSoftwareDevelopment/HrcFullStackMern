import  React, {useState} from 'react';
import './App.css';
import logo from './navlogo.png';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import PuppyPage from './pages/PuppyPage';
import AboutPage from './pages/About/AboutPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import PuppiesPage from './pages/PuppiesPage';
import ShippingPage from './pages/ShippingPage';
import RegisterPage from './pages/RegisterPage';
import PaymentPage from './pages/PaymentPage';
import { BrowserRouter as  Router, Route, Link, NavLink } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import SigninPage from './pages/SigninPage';
import AboutCairnCare from './pages/About/CairnCare';
import AboutDiet from './pages/About/AboutDiet';
import ProfilePage from './pages/ProfilePage';
import PuppiesAdmin from './pages/PuppiesAdmin';
import AboutHomeRaised from './pages/About/AboutHomeRaised';
import Reservations from './pages/ReservationsPage';
import { signout } from './actions/userActions';
const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/PuppiesPage', name: 'Puppies', Component: PuppiesPage },
  { path: '/GalleryPage', name: 'Gallery', Component: GalleryPage },
  { path: '/AboutPage', name: 'About', Component: AboutPage },
  { path: '/Contact', name: 'Contact', Component: ContactPage },
]

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
return (
  <div id="NaviBarStyle"> 
    <div>
  <Navbar  fixed="top" collapseOnSelect expand="lg"expanded={expanded} bg="light" variant="light">
  <Navbar.Brand ><Link to="/"><img src={logo} /> </Link></Navbar.Brand>
  <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto"  >
          {routes.map(route => (
            <Nav.Link
              onClick={() => setExpanded(false)}
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))} 
        </Nav>
  <Nav>

  <NavDropdown.Divider />
  
  {userInfo ? (  <div>
    {userInfo && userInfo.isAdmin ? (
              <NavDropdown title="Admin" id="collasible-nav-dropdown" className="rightSideNavi">
                    <Link to="PuppiesAdmin" onClick={() => setExpanded(false)} id="dropDownStyle"> Puppies </Link>
                    <NavDropdown.Divider />
                    <Link to="#" onClick={() => setExpanded(false)} id="dropDownStyle"> Reservations </Link>
                    <NavDropdown.Divider />
                    <Link to="#" onClick={() => setExpanded(false)} id="dropDownStyle"> App Images </Link>
                    <NavDropdown.Divider />
                    <Link to="#" onClick={() => setExpanded(false)} id="dropDownStyle"> Puppy merchandise </Link>
                    <NavDropdown.Divider />
                    <div onClick={() => setExpanded(false)}>
                    <Link to="#signout" onClick={signoutHandler} >
          Sign Out
        </Link>
        </div>
         
             </NavDropdown>
  ) : (
    <div>
      <NavDropdown title="Account" id="collasible-nav-dropdown" className="rightSideNavi">
      <div id="dropDownStyle">
  <Link to="/ProfilePage" onClick={() => setExpanded(false)}>{userInfo.name}'s Profile</Link>
  </div>
  <NavDropdown.Divider />
              <Link to="#signout" onClick={signoutHandler} id="dropDownStyle">
                <div >
          Sign Out
          </div>
        </Link>
        </NavDropdown>
    </div>
            )}
            </div>
                ) : (
    
    
    
                  <Link to="/SigninPage" onClick={() => setExpanded(false)}>Sign In / Register</Link>
                )}
  




   
            
  </Nav>

</Navbar.Collapse>

</Navbar>
<div className="containertwo">
<Container>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                unmountOnExit
              >
               
                  <Component />
                
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
      </div>
</div>
<Route path="/PuppiesAdmin" component={PuppiesAdmin} />
<Route path="/puppy/:id" component={PuppyPage} />
<Route path="/ProfilePage" component={ProfilePage} />
<Route path="/About/AboutDiet" component={AboutDiet} />
<Route path="/About/AboutHomeRaised" component={AboutHomeRaised} />
<Route path="/ShippingPage" component={ShippingPage} />
<Route path="/About/AboutCairnCare" component={AboutCairnCare} />
<Route path="/SigninPage" component={SigninPage} />
<Route path="/deposit/:id?" component={DepositPage} />
<Route path="/PaymentPage" component={PaymentPage} />
<Route path="/Reservations" component={Reservations} />
<Route path="/RegisterPage" component={RegisterPage} />
</div>
  );
}

export default App;
