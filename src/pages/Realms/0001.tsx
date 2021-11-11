import dynamic from "next/dynamic";
const Realm = dynamic(import("Realm/index"), { ssr: false });

export default function StarterPage() {
  return <Realm properties={{
    id: "0001",
    scene: "Cubes",
    sky: "Night",
    imageFrames: "Black",
    effects: {
      name: "Fog",
      color: "White"
    }
  }} />;
};
