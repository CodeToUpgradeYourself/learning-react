import Search from './Search';
import RestaurantCard from './RestaurantCard';
import { Restaurants, Heading } from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);
  const filterRestaurants = () =>
    listOfRestaurants.filter((obj) => obj.avgRating > 4.7);
  return (
    <div className="container">
      <section>
        <h2>{Heading}</h2>
        <div className="filters">
          <Search></Search>
          <button
            className="filter-btn btn"
            onClick={() => {
              const filters = filterRestaurants();
              setListOfRestaurants(filterRestaurants());
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="filter-btn btn"
            onClick={() => {
              const filters = filterRestaurants();
              setListOfRestaurants(Restaurants);
            }}
          >
            Clear Filter
          </button>
        </div>
        <div className="restaurant-grid">
          {listOfRestaurants.map((obj) => (
            <RestaurantCard key={Math.random()} resInfo={obj}></RestaurantCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
