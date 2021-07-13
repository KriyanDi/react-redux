import React from "react";
import { connect } from "react-redux";
import { FILTERS } from "../constants";
import { setFilter } from "../redux/actions";

const getStringNameOfTheNumber = (number) => {
  switch (number) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    default:
      return "";
  }
};

const Filters = (props) => {
  let stringNameOfFilters =
    getStringNameOfTheNumber(Object.keys(FILTERS).length) + " ui buttons";
  return (
    <div className={stringNameOfFilters}>
      {Object.keys(FILTERS).map((filterKey) => {
        const currFilter = FILTERS[filterKey];
        return (
          <button
            key={`filter-${currFilter}`}
            className="ui button"
            onClick={() => props.setFilter(currFilter)}
          >
            {currFilter}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.filter };
};

export default connect(mapStateToProps, { setFilter })(Filters);
