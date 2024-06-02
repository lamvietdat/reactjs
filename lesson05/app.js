import React from 'react'
import LvdUseState from './components/LvdUseState'
import LvdUseEffect from './components/LvdUseEffect'
import LvdUseContext from './components/LvdUseContext1'


export default function 
() {
  return (
    <div className='container boder mt-3'>
      <h1 className='text-center'>Lâm Viết Đạt- Hook </h1>
      <hr/>
      <LvdUseState/>
      <hr/>
      <LvdUseEffect/>
      <hr/>
      <LvdUseContext/>
    </div>
  )
}