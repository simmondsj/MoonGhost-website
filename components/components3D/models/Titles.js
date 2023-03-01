/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import {Select} from '@react-three/postprocessing'


export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Titles.glb')

  const [teamTHovered, setTeamTHovered] = useState(null);
  const [roadmapTHovered, setRoadmapTHovered] = useState(null);
  const [storyTHovered, setStoryTHovered] = useState(null);
  const [nftTHovered, setNftTHovered] = useState(null);


  return (
    <group ref={group} {...props} dispose={null}>
      <Select enabled={teamTHovered}>
      <mesh geometry={nodes.TitleTeam.geometry} material={materials['Material.002']} onClick={props.handleViewTeamSectionClick}
      onPointerOver={() => setTeamTHovered(true)} onPointerOut={() => setTeamTHovered(false)}/>
      </Select>
      <Select enabled={roadmapTHovered}>
      <mesh geometry={nodes.TitleRoadmap.geometry} material={materials['Material.002']} onClick={props.handleViewRoadmapSectionClick}
      onPointerOver={() => setRoadmapTHovered(true)} onPointerOut={() => setRoadmapTHovered(false)}/>
      </Select>
      <Select enabled={storyTHovered}>
      <mesh geometry={nodes.TitleStory.geometry} material={materials['Material.002']} onClick={props.handleViewStorySectionClick}
      onPointerOver={() => setStoryTHovered(true)} onPointerOut={() => setStoryTHovered(false)}/>
      </Select>
      <Select enabled={nftTHovered}>
      <mesh geometry={nodes.TitleNFTs.geometry} material={materials['Material.002']} onClick={props.handleViewNftSectionClick}
      onPointerOver={() => setNftTHovered(true)} onPointerOut={() => setNftTHovered(false)}/>
      </Select>
      </group>
  )
}

useGLTF.preload('/Titles.glb')
