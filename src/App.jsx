import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-screen font-["Helvetica_Now_Display"] '>
    <div className='navbar line  flex gap-10 pt-10 pb-3  absolute top-0 left-1/2 -translate-x-1/2'>
      {["iphone","ipad","services","mac","products"].map(e=><a href='' className='text-white font-[400] text-sm capitalize  '>
        {e}
      </a>)}
    </div>
    <div className='absolute text-white top-32 left-1/2 -translate-x-1/2 '>
      <h3 className=' text-5xl tracking-tighter font-[700]'>macbook pro.</h3>
      
    </div>
      <Canvas camera={{fov:12,position:[0,-10,220]}} > 
    
    <Environment files={[
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
    ]}/>
    <ScrollControls pages={3}>
         <MacContainer/>
    </ScrollControls>
    
    
    </Canvas>
    </div>
  )
  
}

export default App
