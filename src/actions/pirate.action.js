export const addGold = (amount) => ({
    type: 'ADD_GOLD',
    payload: amount
});

export const addDiamonds = (amount) => ({
    type: 'ADD_DIAMONDS',
    payload: amount
});

export const addPearls = (amount) => ({
    type: 'ADD_PEARLS',
    payload: amount
});

export const addTreasureMap = (map) => ({
    type: 'ADD_TREASURE_MAP',
    payload: map
});

export const editGold = (amount) => ({
    type: 'EDIT_GOLD',
    payload: amount
})