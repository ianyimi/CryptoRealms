import { StandardEnvironment, Fog } from "spacesvr";
import { Stars, Preload, OrbitControls } from "@react-three/drei";
import { Debug } from "@react-three/cannon";
import PauseMenu from "styles/PauseMenu";
import Station from "./models/Station";
import Nfts from "../components/Nfts";
import * as THREE from "three";
import { PostProcessing } from "./components/PostProcessing";
import WorldState from "./components/WorldState";
import { nftPositions } from "./utils/constants";
import { isMobile } from "react-device-detect";
import {Physics} from "@react-three/cannon";
import {Canvas} from "@react-three/fiber";

const STATION_TOKEN_ID = "40539505412060235591267077459928418936006271470437343391270068673212139438081";

export default function Home() {

  // if (isMobile) {
  //   return (
  //     <div>Visit on Desktop</div>
  //   )
  // }

  return (
    <StandardEnvironment
      dev={process.env.NODE_ENV === "development"}
      canvasProps={{ camera: { far: 1000 } }}
      playerProps={{ pos: [0, 1.5, 0], speed: 5, controls: { disableGyro: true } }}
      physicsProps={{ defaultContactMaterial: { friction: 0.01 } }}
      pauseMenu={<PauseMenu />}
      // disableGround
    >
    {/*<Canvas camera={{ aspect: window.innerWidth/window.innerHeight }}>*/}
      {/*<color attach="background" args={["black"]} />*/}
      {/*<Physics>*/}
        {/*<Debug scale={1} color="red">*/}
          <WorldState>
            {/*<Stars />*/}
            {/*<OrbitControls autoRotateSpeed={2} autoRotate />*/}
            <Station position-y={-1} />
            <PostProcessing />
            <Nfts tokenId={STATION_TOKEN_ID} positions={nftPositions} />
            <Preload all />
          </WorldState>
        {/*</Debug>*/}
    {/*  </Physics>*/}
    {/*</Canvas>*/}
    </StandardEnvironment>
  );
}
