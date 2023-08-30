const initialState = {
    gold: 0,
    diamonds: 0,
    pearls: 0,
    treasureMaps: []
};

const pirateValuablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GOLD':
            return {
                ...state,
                gold: state.gold + action.payload
            };
        case 'ADD_DIAMONDS':
            return {
                ...state,
                diamonds: state.diamonds + action.payload
            };
        case 'ADD_PEARLS':
            return {
                ...state,
                pearls: state.pearls + action.payload
            };
        case 'ADD_TREASURE_MAP':
            return {
                ...state,
                treasureMaps: [...state.treasureMaps, action.payload]
            };
        default:
            return state;
    }
};

export default pirateValuablesReducer;