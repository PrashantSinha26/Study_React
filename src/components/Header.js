import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');

  const onlineStatus = useOnlineStatus();

  const { loggedInuser } = useContext(UserContext);
  console.log(loggedInuser);

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-sky-50 lg:bg-green-50'>
      <div className='image-conatiner'>
        <img className='w-56' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-8 m-4'>
          <li className='px-4'>Online Status:{onlineStatus ? '💚' : '❤️'}</li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>
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
          <li className='px-4 font-bold'>{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
