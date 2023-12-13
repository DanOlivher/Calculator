import './Calculator.css'
import React, { useState } from 'react';

function Calculator(){
    const [num,setNum]=useState(0)
    const [Oldnum,setOldNum]=useState(0)
    const [operator,setOperator]=useState()

    function inputNum(e){
        var input = e.target.value;
        if(num===0){
            setNum(input)
        }else{
            setNum(num +input)
        }
    }

    function clear(e){
        setNum(0)
    }

    function porcentagem(){
        setNum(num/100)
    }

    function operaçaoHandle(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(-num +0)
        }
    }

    function calculete(){
        if(operator ==="/"){
            setNum(Oldnum / num);
        }else if(operator === "X"){
            setNum(Oldnum*num);
        }else if(operator === "-"){
            setNum(Oldnum-num);
        }else if(operator === "+"){
            setNum(parseFloat(Oldnum)+parseFloat(num));
        }
    }


    function operation(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }
    return(
        <div className='wrapper'>
            <h1 className='result'>{num}</h1>
            <button className='operator' onClick={clear}>AC</button>
            <button className='operator' onClick={operaçaoHandle}>+/-</button>
            <button className='operator' onClick={porcentagem}>%</button>
            <button className='orange' onClick={operation} value="/">/</button>
            <button className='gray' onClick={inputNum} value={1}>1</button>
            <button className='gray' onClick={inputNum} value={2}>2</button>
            <button className='gray' onClick={inputNum} value={3}>3</button>
            <button className='orange' onClick={operation} value="X">X</button>
            <button className='gray' onClick={inputNum} value={4}>4</button>
            <button className='gray' onClick={inputNum} value={5}>5</button>
            <button className='gray' onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operation} value="-">-</button>
            <button className='gray' onClick={inputNum} value={7}>7</button>
            <button className='gray' onClick={inputNum} value={8}>8</button>
            <button className='gray' onClick={inputNum} value={9}>9</button>
            <button className='orange' onClick={operation} value="+">+</button>
            <button className='zero' onClick={inputNum} value={0}>0</button>
            <button className='gray' onClick={inputNum} value={"."}>,</button>
            <button className='orange' onClick={calculete}>=</button>
        </div>
    )
}

export default Calculator;