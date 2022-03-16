/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import {useTrimesh} from "@react-three/cannon";
import {useTrimeshCollision} from "spacesvr";
import {BufferGeometry} from "three";

type GLTFResult = GLTF & {
  nodes: {
    ice_15: THREE.Mesh
    ice_14: THREE.Mesh
    ice_13: THREE.Mesh
    ice_12: THREE.Mesh
    ice_11: THREE.Mesh
    ice_10: THREE.Mesh
    ice_9: THREE.Mesh
    ice_8: THREE.Mesh
    ice_7: THREE.Mesh
    ice_6: THREE.Mesh
    ice_5: THREE.Mesh
    ice_4: THREE.Mesh
    ice_3: THREE.Mesh
    ice_2: THREE.Mesh
    ice_1: THREE.Mesh
  }
  materials: {
    ice_set: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://d1p3v0j4bqcb21.cloudfront.net/models/icebrgs-1638322726/icebrgs.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult

  useTrimeshCollision((nodes["ice_9"].geometry as BufferGeometry)
    .clone()
    .rotateX(Math.PI/2)
    .scale(0.0232, 0.0232, 0.0232)
    .scale(30, 30, 30)
    .translate(0, -1, 0)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="icebergsglb">
          <mesh
            name="ice_15"
            geometry={nodes.ice_15.geometry}
            material={nodes.ice_15.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_14"
            geometry={nodes.ice_14.geometry}
            material={nodes.ice_14.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_13"
            geometry={nodes.ice_13.geometry}
            material={nodes.ice_13.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_12"
            geometry={nodes.ice_12.geometry}
            material={nodes.ice_12.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_11"
            geometry={nodes.ice_11.geometry}
            material={nodes.ice_11.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_10"
            geometry={nodes.ice_10.geometry}
            material={nodes.ice_10.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_9"
            geometry={nodes.ice_9.geometry}
            material={nodes.ice_9.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_8"
            geometry={nodes.ice_8.geometry}
            material={nodes.ice_8.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_7"
            geometry={nodes.ice_7.geometry}
            material={nodes.ice_7.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_6"
            geometry={nodes.ice_6.geometry}
            material={nodes.ice_6.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_5"
            geometry={nodes.ice_5.geometry}
            material={nodes.ice_5.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_4"
            geometry={nodes.ice_4.geometry}
            material={nodes.ice_4.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_3"
            geometry={nodes.ice_3.geometry}
            material={nodes.ice_3.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_2"
            geometry={nodes.ice_2.geometry}
            material={nodes.ice_2.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
          <mesh
            name="ice_1"
            geometry={nodes.ice_1.geometry}
            material={nodes.ice_1.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0232, 0.0232, 0.0232]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(FILE_URL)
