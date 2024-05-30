import useFetch from "../../hooks/useFetch";
import "./featuredProperty.css";

function FeaturedProperty() {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/hotels?featured=true"
  );

  if (!data || !data.data) {
    return <div>Loading please wait</div>;
  }
  return (
    <div className="fp">
      {loading ? (
        "data is loading"
      ) : (
        <>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt="jaksbc"
              className="fpImg"
            />
            <span className="fpName">{data.data[0].name}</span>
            <span className="fpCity">{data.data[0].city}</span>
            <span className="fpPrice">
              Starting from ${data.data[0].cheapestprice}
            </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt="jaksbc"
              className="fpImg"
            />
            <span className="fpName">{data.data[1].name}</span>
            <span className="fpCity">{data.data[1].city}</span>
            <span className="fpPrice">
              Starting from ${data.data[1].cheapestprice}
            </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt="jaksbc"
              className="fpImg"
            />
            <span className="fpName">{data.data[2].name}</span>
            <span className="fpCity">{data.data[2].city}</span>
            <span className="fpPrice">
              Starting from ${data.data[2].cheapestprice}
            </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt="jaksbc"
              className="fpImg"
            />
            <span className="fpName">{data.data[3].name}</span>
            <span className="fpCity">{data.data[3].city}</span>
            <span className="fpPrice">
              Starting from ${data.data[3].cheapestprice}
            </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FeaturedProperty;
