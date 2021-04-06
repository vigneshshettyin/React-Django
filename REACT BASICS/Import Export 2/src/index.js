import React from 'react'
import ReactDOM from 'react-dom'
import demo, {webstack, mynames} from './App'

ReactDOM.render(
    <>
<p>{demo}</p>
<p>{webstack}</p>
<p>{mynames()}</p>

    </>,document.getElementById('root')
)