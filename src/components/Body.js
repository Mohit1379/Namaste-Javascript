import { useState } from "react";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body=()=>{

    const [restaurant , setRestaurants]=useState(restaurants);


    return (
        <div className='body'>
            <Search/>
            <button className="filter-btn" onClick={()=>{
                const filterRestaurant=restaurant.filter((res) => res.info.avgRating > 4.2 );
                setRestaurants(filterRestaurant);
            }}>Filter by rating</button>
            <div className='res-card-container'>
                {
                  restaurant.map((restaurant)=> (<RestaurantCard key={restaurant.info.id} restaurants={restaurant}/>))
                }
                
            </div>
        </div>
    )
 }

 export default Body;