import React from 'react'
import GsapTo from './GsapTo'
import GsapScrollTrigger from './GsapScrollTrigger'
import GsapStagger from './GsapStagger'
import GsapText from './GsapText'
import GsapFrom from './GsapFrom'
import GsapFromTo from './GsapFromTo'
import Home from './Home'

function index() {
  return (
    <>
    <GsapTo/>
    <GsapFrom/>
    <GsapFromTo/>
    <Home/>
    <GsapScrollTrigger/>
    <GsapStagger/>
    <GsapText/>
    </>

  )
}

export default index