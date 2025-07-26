
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Coin3D(props) {
  const ref = useRef()
  const { scene } = useGLTF("/models/dollarCoin.glb") 

  useFrame(() => {
    ref.current.rotation.y += 0.005 
  })

  return <primitive ref={ref} object={scene} scale={9} {...props} />
}
