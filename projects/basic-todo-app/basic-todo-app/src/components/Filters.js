import React from 'react';
import {FILTERS} from '../constants'

const Filters = () => {
    return (
        <div>
            {Object.keys(FILTERS).map(filterKey => {
                const currFilter = FILTERS[filterKey];
                return (
                    <span key={currFilter}>
                        {currFilter}{" "}
                    </span>
                );
            })}
        </div>
    );
}

export default Filters;