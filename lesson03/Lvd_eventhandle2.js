import React from 'react'

export default function Lvd_eventhandle2() {
    const eventHanldeClick1 = (e) =>{
        console.log('================================');
        console.log(e);
        console.log('================================');
    }
  
    return (
    <div className='alert alert-success'>
        <h2>Event demo - function components</h2>
        <button onClick={eventHanldeClick1("Lâm Viết Đạt")}>gọi khi render </button>
        <button onClick={()=>eventHanldeClick1("K22CNT1-ReactJS")}>Gọi khi click</button>
    </div>
  )
}