import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='image-conatiner'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='navigation-item'>
        <ul>
          <li>Online Status:{onlineStatus ? '💚' : '❤️'}</li>
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
            <Link to='/grocery'>Grocery</Link>
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
