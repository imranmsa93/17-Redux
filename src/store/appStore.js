import { createStore } from "redux";

const initialState = { counter: 0 };
const counterReducer = (state = initialState,action)=>{
    console.log('IMRAN ',action.type);
   if(action.type === 'increment'){
      return {
         counter: state.counter + 1
        };
    }
     if(action.type === 'decrement'){
      return {
         counter: state.counter - 1
        };
    }
   return state;
   
}
const store = createStore(counterReducer);

export default store;