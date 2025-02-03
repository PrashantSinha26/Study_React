import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{   
    const { resData } = props;                 //4
    
    const {name,cuisines,rating,costForTwo,mediaFiles} = resData?.info;      //Destructuring of Data
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
            alt ="res-logo"
            src={CDN_URL+ mediaFiles[0].url}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{rating.value}stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

export default RestaurantCard;