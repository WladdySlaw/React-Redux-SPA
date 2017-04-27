var mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Get ugly'
    },
    {
        id: 4,
        name: 'Move'
    },
    {
        id: 5,
        name: 'Master of Puppets'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
    }, 200)
}