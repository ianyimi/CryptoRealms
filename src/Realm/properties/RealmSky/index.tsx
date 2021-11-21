import { useRealm } from "../../components/RealmState";
import CloudySky from "./components/CloudySky";
import { Sky, Stars } from "@react-three/drei";

export function RealmSky() {

  const { sky } = useRealm();
  const day = sky === "Day",
    night = sky === "Night";
  const cloudSky = !day && !night;

  return (
    <group name="SKY">
      {day && <Sky sunPosition={1} />}
      {night && <Stars count={1000} radius={300} factor={15} fade />}
      {cloudSky && <CloudySky color={sky.toLowerCase()} />}
    </group>
  )
}