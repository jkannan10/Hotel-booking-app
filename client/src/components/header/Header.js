import React, { useContext, useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const handleNavigation = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type !== "list" ? "headerContainer" : "headerContainer listMode"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for you travels - unlock instant savings of 10% or
              more with a free HoBooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where re you going"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} to 
              ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOptions({ adult: 1, children: 0, room: 1 });
                  }}
                >
                  2 adutls 2 children 1 room
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optiontext">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          disabled={options.adult <= 1}
                          onClick={() => {
                            setOptions({
                              ...options,
                              adult: options.adult - 1,
                            });
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterText">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            setOptions({
                              ...options,
                              adult: options.adult + 1,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          disabled={options.children <= 0}
                          onClick={() => {
                            setOptions({
                              ...options,
                              children: options.children - 1,
                            });
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterText">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            setOptions({
                              ...options,
                              children: options.children + 1,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterBtn"
                          disabled={options.room <= 1}
                          onClick={() => {
                            setOptions({ ...options, room: options.room - 1 });
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterText">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => {
                            setOptions({ ...options, room: options.room + 1 });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleNavigation}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
