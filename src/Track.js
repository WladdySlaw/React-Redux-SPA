import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

const Track = ({ track }) => {
    return(
        <div className="container">
            <Menu />
            <div className="text-center">This is page for {track.name}</div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        track: state.tracks.find(track => Number(track.id) === Number(ownProps.params.id))
    };
};

export default connect(mapStateToProps)(Track);