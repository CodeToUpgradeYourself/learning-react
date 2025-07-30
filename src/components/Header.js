import { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnName, setBtnName] = useState('Login');
  const toggle = () => {
    const status = !isLoggedIn;
    setIsLoggedIn(status);
    const name = status ? 'Logout' : 'Login';
    setBtnName(name);
  };
  return (
    <header>
      <div className="logo">Learning</div>
      <nav>
        <a href="#">Search</a>
        <a href="#">Offers</a>
        <a href="#">Help</a>
        <a href="#">Login</a>
        <a href="#">Cart</a>
        <button className="btn" onClick={toggle}>
          {btnName}
        </button>
      </nav>
    </header>
  );
};

export default Header;
