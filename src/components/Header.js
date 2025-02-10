import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  let btnName = 'Login';

  const [btnNameReact, setbtnNameReact] = useState('Login');

  console.log('kp3');

  return (
    <div className='header'>
      <div className='image-conatiner'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='navigation-item'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              setbtnNameReact === 'Login'
                ? setbtnNameReact('Logout')
                : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
