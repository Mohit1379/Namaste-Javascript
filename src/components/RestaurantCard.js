import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props)=>{
    console.log(props);
    const { name , cuisines, avgRating, sla, cloudinaryImageId}=props.restaurants.info;
    return (
        <div className='res-card'>
            <div className='food-logo'>
                <img src={`${CDN_URL}${cloudinaryImageId}`}>
                </img>
            </div>
            <div className='food-desc'>
                <h1>{name}</h1>
                <h2>{cuisines.join(', ')}</h2>
                <h3>{avgRating} rating</h3>
                <h4>Delivery Time {sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;