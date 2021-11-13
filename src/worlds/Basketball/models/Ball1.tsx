/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";
import {useLimiter, usePlayer} from "spacesvr";
import {Vector3} from "three";
import {useSpring} from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    basket_ball: THREE.Mesh
  }
  materials: {
    pbr: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://d1p3v0j4bqcb21.cloudfront.net/models/ball1-1634879067/ball1.glb.gz";

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  // const mesh4 = useRef<THREE.Mesh>()
  const { raycaster: { ray }} = usePlayer();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult
  const [ collider, api ] = useSphere(() => ({
    mass: 0.1,
    position: [0, 15, -5],
    linearFactor: [0.75, 1.5, 0.75],
    sleepSpeedLimit: 10,
    angularFactor: [1.25, 1.25, 1.25],
  }))

  const pos = useRef(new Vector3())
  const newPos = useRef(new Vector3())
  api.position.subscribe((p) => pos.current.set(p[0], p[1], p[2]))

  const { newPosition } = useSpring({
    newPosition: newPos.current,
    config: {
      mass: 1
    }
  })

  const limiter = useLimiter(60);
  useFrame(({ clock, camera }) => {
    if (!limiter.isReady(clock) || !pos.current) return;
    ray.at(1, newPos.current)

    // mesh4.current.position.set(newPos.current.x, newPos.current.y, newPos.current.z)
    // mesh4.current.lookAt(camera.position)

    // const pos = new Vector3();
    // group.current?.getWorldPosition(pos);
    if (camera.position.distanceToSquared(pos.current) < 0.25) {
      api.position.set(newPos.current.x, newPos.current.y, newPos.current.z)
    }
  })

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" {...props}>
        <mesh
          name="basket_ball"
          ref={collider}
          geometry={nodes.basket_ball.geometry}
          material={materials.pbr}
        />
      </group>
      {/*<mesh ref={mesh4}>*/}
      {/*  <boxBufferGeometry args={[0.5, 0.5, 0.5]} />*/}
      {/*  <meshBasicMaterial color="yellow" />*/}
      {/*</mesh>*/}
    </group>
  )
}

useGLTF.preload(FILE_URL)
