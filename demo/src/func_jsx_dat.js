import React from 'react'

export default function Func_JSX_dat(props) {
    const users ={
        name:"Lam Viet Dat",
        age: 20
    }
  return (
    <div>
        <h2>Funtion Component Demo</h2>
        <h3>
            Welcome to , {users.name} - {users.age}
        </h3>
        <hr/>
        <h3>Props:
            <br/> FullName: {props.fullname}
            <br/> Age: {props.age}
        </h3>
    </div>
  )
}