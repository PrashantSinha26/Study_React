import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  console.log('kp1');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/homepagev2/getCards?lat=26.8288145&lng=80.8792871&pageLimit=15'
    );

    const json = await data.json();
    console.log('ps1', json?.data?.success?.cards[5]?.card?.card?.info);

    const info1 =
      json?.data?.success?.cards[5]?.card?.card?.info[0]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;
    const info2 =
      json?.data?.success?.cards[5]?.card?.card?.info[1]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;
    const info3 =
      json?.data?.success?.cards[5]?.card?.card?.info[2]?.stackedDetails
        ?.dineoutRestaurants?.restaurants;

    setListOfRestaurant([...info1, ...info2, ...info3]);
    setFilteredRestaurant([...info1, ...info2, ...info3]);

    console.log('ps2', filteredRestaurant);
  };

  // Shimmer UI......
  // if(listOfRestaurant.length === 0){
  //     return <Shimmer />
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.rating.value > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} /> //LOOP for calling a resturant
        ))}
      </div>
    </div>
  );
};

export default Body;
