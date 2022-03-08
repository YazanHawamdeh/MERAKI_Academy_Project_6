


const Navigation = () => {
 
  //====================================
  return (
    

    <>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-md-3">
          <div className="container">
            <a className="navbar-brand" href="#">Good Night</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
     </>
        
       


     
    
  );
};
export default Navigation;
