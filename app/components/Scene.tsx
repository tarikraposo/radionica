'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model'


export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 2]} intensity={2} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}