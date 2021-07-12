import React from 'react';
import {FILTERS} from '../constants'

const Filters = () => {
    return (
        <div>
            {Object.keys(FILTERS).map(filterKey => {
                const currFilter = FILTERS[filterKey];
                return (
                    <span key={currFilter}>
                        <h3 className="ui header">
                        {currFilter}
                        </h3>
                    </span>
                );
            })}
        </div>
    );
}

export default Filters;