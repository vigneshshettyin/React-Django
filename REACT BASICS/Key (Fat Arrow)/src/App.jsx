import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import "./index.css";

const printDate = (val)=>{
    return <Card key={val.id} imgsrc={val.imgsrc} title={val.title} para={val.para} />;
}



const App = ()=>{

    return (
        <>
        <h1 className="PNHEAD">Prime & Netflix Shows</h1>
        <div className="grid">

        { Sdata.map((val)=><Card key={val.id} imgsrc={val.imgsrc} title={val.title} para={val.para} />) } 


    </div>
        </>
    )
}

export default App