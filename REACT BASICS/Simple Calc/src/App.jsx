import React from 'react'
import * as calc from './Calc'
function App() {
    return (
        <>
            <p>{calc.add(2, 5)}</p>
            <p>{calc.sub(2, 5)}</p>
            <p>{calc.mul(2, 5)}</p>
            <p>{calc.div(4785, 45)}</p>
        </>
    )
}

export default App