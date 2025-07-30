const ShimmerCard = () => {
  const shimmerCount = Array(8).fill(5);
  return (
    <>
      {shimmerCount.map(() => {
        return (
          <div className="shimmer-card" key={Math.random()}>
            <div className="shimmer-img shimmer"></div>
            <div className="shimmer-text shimmer title"></div>
            <div className="shimmer-text shimmer subtitle"></div>
            <div className="shimmer-text shimmer small-line"></div>
          </div>
        );
      })}
    </>
  );
};

export default ShimmerCard;
