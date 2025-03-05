import ItemList from './ItemList';

const RestaurantCategory = (props) => {

    console.log("ps2",props);
  return (
    <div>
      {/* Accordian Header Section*/}

      <div className=' mx-auto my-4 w-6/12 bg-gray-100 shadow-lg p-4 '>
        <div className='flex justify-between'>
          <span className='font-bold'>
            {props.data.title} 
          </span>
          {/*({data.itemsCards.length})*/}
          <span>🔽</span>
        </div>

        {/*Accordian Body Section*/}

        <ItemList items={props.data.itemsCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
