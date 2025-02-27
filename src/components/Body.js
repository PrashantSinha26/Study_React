import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/homepagev2/getCards?lat=26.8288145&lng=80.8792871&pageLimit=15'
    );

    const json = await data.json();

    const info1 =
      json?.data?.success?.cards[4]?.card?.card?.info[0]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;
    const info2 =
      json?.data?.success?.cards[4]?.card?.card?.info[1]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;
    const info3 =
      json?.data?.success?.cards[4]?.card?.card?.info[2]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;

    setListOfRestaurant([...info1, ...info2, ...info3]);
    setFilteredRestaurant([...info1, ...info2, ...info3]);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks likes your internet is down</h1>;

  // Shimmer UI......
  // if(listOfRestaurant.length === 0){
  //     return <Shimmer />
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter flex'>
        <div className='search m-3 p-3'>
          <input
            type='text'
            className='border border-solid border-black '
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className='px-3 py-1 bg-green-100 m-3 rounded-lg'
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //Search Text

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            className='px-3 py-1 bg-gray-100 m-3'
            onClick={() => {
              //Filter Logic
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.rating.value > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className='flex flex-wrap hover hover:bg-amber-200:'>
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={'/"restaurants/' + restaurants.info.id}
          >
            <RestaurantCard resData ={restaurants} />
          </Link> //LOOP for calling a resturant
        ))}
      </div>
    </div>
  );
};

export default Body;
