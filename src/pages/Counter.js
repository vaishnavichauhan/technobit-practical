import React from 'react'
import "./style.css";
import { increment,decrement,reset } from '../Redux/action/counteraction'
import {useDispatch, useSelector} from 'react-redux'

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state)=>state.cnt.counter)

    const clickBtnADD = ()=>{
        dispatch(increment())
    }
    
    const clickBtnSUB = ()=>{
        dispatch(decrement())
    }
    const clickBtnRESET = () => {
        dispatch(reset())
    }
  return (
    <div  >
        <h1>Welcome home </h1>
    <h1 class="border border-primary bgc">counter</h1>
    <from>
        <p>{counter}</p>
        <button onClick={()=>clickBtnADD()}>ADD</button>
        <button onClick={()=>clickBtnSUB()}>SUB</button>
        <button onClick={()=>clickBtnRESET()}>RESET</button>

    </from>
    
    </div>

  )
}

export default Counter;