
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const { createStore } = require("redux");

const initialState = {
    count: 0
}
const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}
const resetAction = () => {
    return {
        type: RESET,
    }
}

// Creating Reducer

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };



        default:
            state;
    }
};

//Store


const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());