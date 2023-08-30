import { legacy_createStore } from 'redux';
import produce from 'immer';

// state
const initialState = {
    playing: false,
    A: 3,
    B: 4
};

// action creator
export const setPlaying = (playing) => ({
    type: 'setPlaying',
    payload: playing,
});

export const compareValues = (A, B) => {
    if (A > B) {
        return 'A is greater than B';
    } else if (A < B) {
        return 'A is less than B';
    } else {
        return 'A and B are equal';
    }
};

function reducer(state = initialState, action) {
    if (action.type === 'setPlaying') {
        return produce(state, draft => {
            draft.playing = action.payload;
        });
    }
    return state;
}

export const store = legacy_createStore(reducer);

store.subscribe(() => {
    console.log('Nouveau state:');
    console.log(store.getState());
});

