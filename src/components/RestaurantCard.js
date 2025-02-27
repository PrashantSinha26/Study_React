import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props; 

  const { name, cuisines, rating, costForTwo, mediaFiles } = resData?.info; //Destructuring of Data
  return (
    <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <img
        className='rounded-lg'
        alt='res-logo'
        src={CDN_URL + mediaFiles[0].url}
      />
      <h3 className='font-bold py-2 text-lg'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h5>{rating.value} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

//Creating a Higher Order Component

//Input - ResturantCard - ResturantCardGIRFSpecial



export default RestaurantCard;
