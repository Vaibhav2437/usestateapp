import { useState } from "react"

const Counter = ()=>{
    const [count,setCount] = useState(0)

    const increament = () =>
    {
        setCount (count + 1)
    }
    const decreament = ()=>{
        if(count>0){
            setCount(count - 1)
        }
    }
    return(
        <div>
            <h2>Counter App</h2>
            <div>
                <div className="bg-dark w-50 mx-auto p-3">
                    <button className="bg-success" onClick={increament}>+</button>
                    <button className="bg-warning">{count}</button>
                    <button className="bg-primary" onClick={decreament}>-</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;