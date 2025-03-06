import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
  const handleClick = () => {
    props.setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header Section*/}

      <div className=' mx-auto my-4 w-6/12 bg-gray-100 shadow-lg p-4 '>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-bold'>
            {props.data.title} ({props.data.itemCards.length})
          </span>
          {/*({data.itemsCards.length})*/}
          <span>🔽</span>
        </div>

        {/*Accordian Body Section*/}

        {props.showItems && <ItemList items={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
