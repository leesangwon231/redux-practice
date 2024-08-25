import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Box from "./component/box";
import GrandSonBox from "./component/GrandSonBox";



function App() {
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const pw = useSelector(state => state.pw)

  const dispatch = useDispatch();
  const increase = () => {
      dispatch({type:"INCREMENT",payload : {num : 5}})
  }

    const decrease = () => {
        dispatch({type:"DECREMENT",payload : {num : 1}})
    }

  const login = () => {
      dispatch({type : "LOGIN" , payload : {id : "werggf", pw : "1234"}})
  }

  return (
    <div className="App">
      <h1>id : {id}</h1>
      <h1>pw : {pw}</h1>
      <h1>{count}</h1>
      <Box/>
      <GrandSonBox/>
      <button onClick={increase}>5 증가!</button>
      <button onClick={decrease}>1 감소!</button>
      <button onClick={login}>로그인!</button>
    </div>
  );
}

export default App;
