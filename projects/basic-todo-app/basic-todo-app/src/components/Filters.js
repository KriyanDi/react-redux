import React from 'react';
import { connect } from 'react-redux';
import {FILTERS} from '../constants'
import { setFilter } from '../redux/actions';

const Filters = () => {
    return (
        <div>
            {Object.keys(FILTERS).map(filterKey => {
                const currFilter = FILTERS[filterKey];
                return (
                    <span
                        key={currFilter}
                        onClick={setFilter}
                    >
                        {currFilter}{" "}
                    </span>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return { activeFilter: state.filter };
}

export default connect(mapStateToProps, { setFilter })(Filters);