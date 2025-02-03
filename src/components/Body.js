import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    
               //3
    return(
    <div className="body">
        <div className ="filter">
            <button className="filter-btn"
            onClick={()=>{
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
        <div className="res-container">
                {listOfRestaurant.map((restaurant) =>(
                <RestaurantCard key={restaurant.info.id} resData ={restaurant} />     //LOOP for calling a resturant
                ))}
            </div>    
        </div>
    );
};


export default Body;
