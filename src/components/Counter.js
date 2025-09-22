import { useSelector,useDispatch } from 'react-redux'; 
import classes from './Counter.module.css';
import { counterAction } from '../store/counterSlice.js';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();  
  const toggleCounterHandler = () => {};
  const incrementHandler = ()=> {
      dispatch(counterAction.increment());
  }
   const decrementHandler = ()=> {
     dispatch(counterAction.decrement());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
