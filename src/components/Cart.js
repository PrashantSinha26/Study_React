import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className='text-center m-5 p-5'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button
          className=' cursor-pointer rounded-2xl p-2 m-2 bg-amber-600 text-black'
          onClick={handleClearCart}
          >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
