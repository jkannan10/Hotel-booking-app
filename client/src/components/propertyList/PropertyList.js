import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/hotels/countByType"
  );

  // Check if data is available before accessing its properties
  const item1 = data?.data?.[0] || {};
  const item2 = data?.data?.[1] || {};
  const item3 = data?.data?.[2] || {};
  const item4 = data?.data?.[3] || {};
  const item5 = data?.data?.[4] || {};

  return (
    <div className="pList">
      {loading ? (
        "loading data"
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item1.type}</h1>
              <h2>{item1.count} hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item2.type}</h1>
              <h2>{item2.count} hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item3.type}</h1>
              <h2>{item3.count} hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item4.type}</h1>
              <h2>{item4.count} hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item5.type}</h1>
              <h2>{item5.count} hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyList;
