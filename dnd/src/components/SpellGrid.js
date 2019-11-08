import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/Actions';
import SpellCard from './SpellCard';

const SpellGrid = props => {

    useEffect(() => {
        props.fetchData();
    }, []);

    if (props.isFetching) {
        return <h2>Loading Spells . . .</h2>
    }

    return(
        <div>
            {Array.from(props.spell).map((spell, index) => (
                <SpellCard 
                    key={index}
                    name={spell.name}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        spell: state.spells,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(SpellGrid)