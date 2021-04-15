import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <iframe src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" className="giphy-embed"></iframe>
      <Link to="/" className="title">Planet Party!</Link>
    </header>
  )
}

export default Header;
