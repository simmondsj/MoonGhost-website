/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Scene.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube004.geometry} material={materials.CaveOuter} />
      <mesh geometry={nodes.Cube004_1.geometry} material={materials.RedEyes} />
      <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Cube004_3.geometry} material={materials['Black1.001']} />
      <mesh geometry={nodes.Cube004_4.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Cube004_5.geometry} material={materials['Booster.001']} />
      <mesh geometry={nodes.Cube004_6.geometry} material={materials.Booster} />
      <mesh geometry={nodes.Cube004_7.geometry} material={materials.Table} />
      <mesh geometry={nodes.Cube004_8.geometry} material={materials['Brushed Metal']} />
      <mesh geometry={nodes.Cube004_9.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube004_10.geometry} material={materials.BookCase} />
      <mesh geometry={nodes.Cube004_11.geometry} material={materials.BookPages} />
      <mesh geometry={nodes.Cube004_12.geometry} material={materials.Chair} />
      <mesh geometry={nodes.Cube004_13.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube004_14.geometry} material={materials.VBlack} />
      <mesh geometry={nodes.Cube004_15.geometry} material={materials['Nft description']} />
      <mesh geometry={nodes.Cube004_16.geometry} material={materials.AboutText} />
      <mesh geometry={nodes.Cube004_17.geometry} material={materials.About} />
    </group>
  )
}

useGLTF.preload('/Scene.glb')