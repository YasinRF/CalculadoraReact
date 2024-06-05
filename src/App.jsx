import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import './App.css'
import Numbers from "./components/Numbers";


const App = () => {
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.lenght > 0 ? items[items.lenght - 1] : 0;

    return (<main className="react-calculator">
        <Result value={stack} />

        <Numbers onclickNumber={number => setStack(`${stack}${number}`)} />

        <MathOperations
            onclickOperation={operation => {
                setStack(`${stack}${operation}`)
            }}
            onclickEqual={equal =>
                setStack(eval(stack).toString())
            }
        />

        <Functions
            onContentClear={() =>
                setStack('')
            }
            onDelete={() => {
                const newStack = stack.substring(0, stack.length - 1)
                setStack(newStack)
            }}
        />
    </main>)
}

export default App