import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  console.log('ps3',resInfo?.cards?.[2]?.card?.card?.info);

  if (resInfo?.cards?.[2]?.card?.card?.info === undefined) {
    return <h1>ResturantCard Not Available</h1>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  console.log('ps1', categories);

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6  text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(',')}-{costForTwoMessage}
      </p>

      {/* Categories Accordian */}

      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
