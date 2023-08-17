import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount, reset } from './counterSlice';

const Counter = () =>{
    const [number,setNumber] = useState('')
    const [asyncNumber,setAsyncNumber] = useState('')
    const counter = useSelector((state=>state.counter.count))
    // console.log(counter)
    const dispatch = useDispatch()

    const incrementByAmountHandler=()=>{
        const value = incrementByAmount(+number)
        console.log(value)
        dispatch(value)
        setNumber('')
    }

    const asyncNumberHandler=()=>{
        dispatch(incrementAsync(+asyncNumber))
        setAsyncNumber('')
    }

    const incrementHandler = () => {
        const incrementAction = increment()         // increment() this is returning action abject this is the action function which return a function
        console.log(incrementAction)
        dispatch(incrementAction)                     //it will not add two after clicking as it show asynchronous behaviour
                                                // setCount((pre)=>pre+1)   //get rid of this we use callback function so before state is updating it stores in state and with the help of call back we get the value  
                                                // setCount((pre)=>pre+1)  
    }
    const DecrementHandler = () => dispatch(decrement())
    const resetHandler = () => dispatch(reset())

    return (
        <div>
        <h3>{counter}</h3>
        <button onClick={incrementHandler}>+</button>
        <button onClick={DecrementHandler}>-</button>
        <button onClick={resetHandler}>Reset</button>
        <br />
        <br />
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={incrementByAmountHandler}>Update counter</button>
        </div>
        <br />
        <div>
            <input type="number" value={asyncNumber} onChange={(e)=>setAsyncNumber(e.target.value)} />
            <button onClick={asyncNumberHandler}>Async number</button>
        </div>
        </div>



    );
};

export default Counter;