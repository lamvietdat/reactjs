import React from 'react'

export default function Func_JSX_Lvd(props) {
  const users = {
    name: 'Lam Viet dat',
    age: 20
  }
  return (
    <div>
      <h2>Function Component Demo</h2>
      <h3>
        welcome to ,{users.name} - {users.age}
      </h3>
      <hr>
      </hr>
      <h3> Props:
          <br /> fullName:{props.fullName}
          <br /> age:{props.age}


      </h3>
    </div>
  )
}