import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks';
import Menu from './Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
    console.log(ownProps);
    let trackInput = '';
    let searchInput = '';

    const addTrack = (event) => {
        if (event.key === 'Enter'){
            onAddTrack(trackInput.value);
            trackInput.value = '';
        }
    }

    const findTrack =  () => {
        onFindTrack(searchInput.value);
    }
    return(
        <div className="container">
            <Menu/>
            <div>
                <input type="text" onKeyPress={addTrack} placeholder="Add new element and press enter" className="form-control" ref={(input) => { trackInput = input }} />
            </div>
            <div>
                <input type="text" className="form-control" placeholder="Search and press enter" onChange={findTrack} ref={(input) => { searchInput = input }}/>
            </div>
            <div>
                <button onClick={onGetTracks} className="btn btn-success">Get standart tracks</button>
            </div>
            <ul>
                {tracks.map((track, index) =>
                    <li key={index}>
                        <Link to={'/track/' + track.id}>{track.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name 
            }
            dispatch({ type: 'ADD_TRACK', payload })
        },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);