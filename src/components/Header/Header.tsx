import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src="https://media.giphy.com/media/VI2UC13hwWin1MIfmi/source.gif" alt="Animated drawing of spinning Earth with Moon orbiting" className="giphy-embed" />
      </Link>
      <Link to="/" className="title">Planet Party!</Link>
    </header>
  )
}

export default Header;
