import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/Actions';
import SpellCard from './SpellCard';

const SpellGrid = props => {

    return(
        <div>
            <SpellCard />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        spell: state.name,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(SpellGrid)