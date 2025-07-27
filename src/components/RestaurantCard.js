const RestaurantCard = ({ resInfo }) => {
  const { name, cuisines, avgRating, deliveryTime, imageUrl } = resInfo;
  return (
    <div className="restaurant-card">
      <img src={imageUrl} />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines}</p>
        <p className="rating">
          {avgRating} • {deliveryTime}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
