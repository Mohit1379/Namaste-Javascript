import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{

    const [restaurant , setRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");
    const [filterSearch, setFilterSearch]=useState([])


    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }

    const handleSearchClick=()=>{
       const searchRestaurant =  restaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
       setFilterSearch(searchRestaurant);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async ()=>{
        const response= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data=await response.json();
        setRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterSearch(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    return (
        <div className='body' style={{marginTop:"10px"}}>
            <input type="text"  className="search-box" value={searchText} onChange={handleChange}/>
            <button onClick={handleSearchClick} className="search-btn">Search</button>
            <button className="filter-btn" onClick={()=>{
                const filterRestaurant=restaurant.filter((res) => res.info.avgRating > 4.2 );
                setFilterSearch(filterRestaurant);

            }}>Filter by rating</button>
            <div className='res-card-container'>
                {
                  filterSearch.map((restaurant)=> (<RestaurantCard key={restaurant.info.id} restaurants={restaurant}/>))
                }
                
            </div>
        </div>
    )
 }

 export default Body;