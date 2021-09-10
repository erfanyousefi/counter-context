import { createContext, useState, useContext } from "react"

const CounterContext = createContext({
    count: 0,
    increment: () => { },
    decrement: () => { }
})

export const useCounter = () => useContext(CounterContext)

function CounterContextProvider(props) {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1)
    }
    const context = {
        count, increment, decrement
    }
    return (
        <CounterContext.Provider value={context}>
            {props.children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider;