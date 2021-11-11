export type SceneName = "Maze" | "Penthouse" | "Cubes" | "Matrix" | "Moon" | "Warehouse" | "Field" | "Mansion" | "Mars";
export type RlmScene = {
  name: SceneName,
  type: "Indoor" | "Outdoor" | "???",
  size: "Petite" | "Mediocre" | "Immense" | "Galactic"
}
export type RlmSky = "Day" | "Night" | "Red" | "Orange" | "Yellow" | "Green" | "Blue" | "Purple" | "Matrix" | "Rainbow" | "Galaxy";
export type EffectName = "Fog" | "Particles" | "Birds" | "Birds" | "Lanterns";
export type RlmEffect = {
  name: EffectName,
  color: string
}
export type ImageFrame = "Black" | "White" | "Gold"
