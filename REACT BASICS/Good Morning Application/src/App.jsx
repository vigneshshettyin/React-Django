import React from 'react'

function App() {
    var currentDate = new Date()

    var currentHour = currentDate.getHours()

    let wish = ''
    const cssStyle = { fontFamily: '"Courier New", Courier, monospace' }
    if (currentHour >= 0 && currentHour < 12) {
        wish = 'Good Morning'
        cssStyle.color = 'green'
    }
    else if (currentHour >= 12 && currentHour < 19) {
        wish = 'Good Afternoon'
        cssStyle.color = 'orange'
    }
    else {
        wish = 'Good Night'
        cssStyle.color = 'blue'
    }

    return (
        <>
            <div>
                <h1 style={{ fontFamily: '"Courier New", Courier, monospace' }}>Hi,<span style={cssStyle}>{wish}</span></h1>
            </div>
        </>
    )
}

export default App