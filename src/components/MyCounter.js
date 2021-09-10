import {useCounter} from "./../contexts/CounterContext"
function MyCounter() {
    const {count, increment, decrement} = useCounter()
    return (
        <div>
            Count : {count}
            <div>
                <button onClick={increment} style={{ margin: '7px' }}>Increment + </button>
                <button onClick={decrement}>Decrement - </button>
            </div>
        </div>
    )
}

export default MyCounter