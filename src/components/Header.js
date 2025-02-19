import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/cart'>Carts</Link>
          </li>
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
