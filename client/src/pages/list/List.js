import React, { useState } from "react";
import "./list.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [dates, setDates] = useState(location.state.dates);
  const [openOption, setOPenOption] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:3000/api/hotels/searchByCity?city=${destination}`
  );

  const handleSearch = () => {
    reFetch(
      `http://localhost:3000/api/hotels/refetch?min=${min ? min : 0}&max=${
        max ? max : 999
      }&city=${destination}`
    );
    //console.log(data);
  };
  if (!data || !data.data) {
    return <div>Loading data</div>;
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOPenOption(!openOption)}>
                {" "}
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to 
              ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openOption && (
                <DateRange
                  onChange={(item) => setDates(item.selection)}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price (per night)</span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price (per night)</span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "data is loading "
            ) : (
              <>
                {data.data.map((item, ind) => {
                  return <SearchItem item={item} key={ind} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
