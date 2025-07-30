import React, { useEffect, useState } from 'react';
import Search from './Search';
import RestaurantCard from './RestaurantCard';
import { Heading } from '../utils/mockData';
import { CDN_URL } from '../utils/constants';
import ShimmerCard from './ShimmerCard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  const filterRestaurants = () => {
    const filtered = originalList.filter((obj) => obj.avgRating > 4.7);
    setListOfRestaurants(filtered);
  };

  const clearFilter = () => {
    setListOfRestaurants(originalList);
  };

  const searchRestaurant = () => {
    if (searchText === '') {
      setListOfRestaurants(originalList);
      return;
    }
    const filtered = listOfRestaurants.filter((obj) =>
      obj.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5423815&lng=77.1234044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      const topOnlineResInDelhiList =
        restaurants?.map((obj) => {
          const { id, avgRating, cuisines, name, sla, cloudinaryImageId } =
            obj.info;
          return {
            id,
            name,
            cuisines: cuisines.join(', '),
            avgRating,
            deliveryTime: sla?.slaString,
            imageUrl: `${CDN_URL}/${cloudinaryImageId}`,
          };
        }) || [];

      // Set both filtered and original lists
      setListOfRestaurants(topOnlineResInDelhiList);
      setOriginalList(topOnlineResInDelhiList);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch restaurant data:', error);
    }
  };

  return (
    <div className="container">
      <section>
        <h2>{Heading}</h2>
        <div className="filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={searchRestaurant}>Search</button>
          </div>
          <button className="filter-btn btn" onClick={filterRestaurants}>
            Top Rated Restaurant
          </button>
          <button className="filter-btn btn" onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
        <div className="restaurant-grid">
          {loading ? (
            <ShimmerCard></ShimmerCard>
          ) : (
            listOfRestaurants.map((obj) => (
              <RestaurantCard key={obj.id} resInfo={obj} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Body;
