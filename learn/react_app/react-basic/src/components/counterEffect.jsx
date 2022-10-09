import React, {useEffect, useState} from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)
    const countUp = () => {
        setCount(prevState => prevState + 1)
    }
    const countDown = () => {
        setCount(prevState => prevState - 1)
    }
    
    // countが発火すると実行
    useEffect(() => {console.log("Current count is...", count)},[count])
    // 初回のみ実行
    useEffect(() => {console.log("Current count is...", count)},[])
    // 毎回実行(第二引数にcountを指定するのと同じ挙動)
    useEffect(() => {console.log("Current count is...", count)})


    return(
        <div>
            <p>現在のカウント数: {count} </p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};
export default CounterEffect;