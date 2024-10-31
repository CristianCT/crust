import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={ Styles.navBar }>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../images/CRUST.png" alt="Logo" style={ Styles.logo}/>
        </Link>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <center><NavLink exact activeClassName="selected-link" className="nav-link text-white" to="/" style={ Styles.linkRouter }>HOME</NavLink></center>
            </li>
            <li className="nav-item">
              <center><NavLink activeClassName="selected-link" className="nav-link text-white" to="/services" style={ Styles.linkRouter }>SERVICES</NavLink></center>
            </li>
            <li className="nav-item">
              <center><NavLink activeClassName="selected-link" className="nav-link text-white" to="/about" style={ Styles.linkRouter }>ABOUT</NavLink></center>
            </li>
            <li className="nav-item">
              <center><NavLink activeClassName="selected-link" className="nav-link text-white" to="/contact" style={ Styles.linkRouter }>CONTACT</NavLink></center>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Styles = {
  navBar: {
    height: 64,
    margin: 0,
    padding: 0,
  },
  logo: {
    padding: 8,
    height: 55
  }, 
  linkRouter: {
    width: 100,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default App;
