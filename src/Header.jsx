import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  const handleKeyPress = (event) => {
    console.log('Key pressed:', event.key);
  };
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="assets/images/logo.png" alt=""/>
                </Link>
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onKeyPress={(event) => {
    if (event.key === 'Enter') {
      // Do your search logic here
      console.log('Search:', event.target.value);
    }
  }}
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                <ul className="nav">
                  <li><Link to="/" className="active">Home</Link></li>
                  <li><Link to="/browse">Browse</Link></li>
                  <li><Link to="/details">Details</Link></li>
                  <li><Link to="/streams">Streams</Link></li>
                  <li>
                    <Link to="/profile">
                      Profile <img src="assets/images/profile-header.jpg" alt=""/>
                    </Link>
                  </li>
                </ul>
                <button className='menu-trigger'>
                  <span>Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}