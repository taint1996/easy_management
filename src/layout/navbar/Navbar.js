import React from 'react'
import './navbar.scss'
import '../../pages/home/common.scss'

const Navbar = () => {
    return (
        <>					
					<nav className="navbar sticky-top">
						<div className="container">														
							<div className="col">
								<a className="navbar-brand navbar-logo" href="#">[E] Management</a>							
							</div>
							
							<div className="col">
								<a className="navbar-brand text-link" href='#'>
								News
								</a>	
								<a className="navbar-brand text-link" href='#'>
									Blog
								</a>	
								<a className="navbar-brand text-link" href='#'>
									About Us
								</a>
							</div>

							<div className="col">								
								<button type="button" className="btn btn-outline-secondary me-md-3">Sign In</button>
								<button type="button" className="btn btn-outline-success">Sign Up</button>								
							</div>							
						</div>														
					</nav>					
        </>
    )
}

export default Navbar
