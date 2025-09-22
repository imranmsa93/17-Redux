import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0,showCounter:true };
const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.amount;
        },
        togggle(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = { isAutenticated :true };
const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAutenticated = true;
        },
        logout(state){
            state.isAutenticated = false;
        }
    }
});

const store = configureStore({
    reducer: {counter:counterSlice.reducer,
              auth:authSlice.reducer
    }
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;