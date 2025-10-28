import { useState } from "react";

export type KitchenShape = "single" | "l-shape";
export type CountertopMaterial = "marble" | "quartz" | "solid" | "porcelain";
export type DoorType = "lake" | "flat" | "membrane" | "solid-veneer" | "tempered-glass";
export type LedType = "none" | "crown" | "upper";

export interface KitchenConfig {
  // Kitchen Shape & Dimensions
  kitchenShape: KitchenShape;
  width: string;
  widthY: string;
  height: string;

  // Island
  hasIsland: boolean;
  islandHeight: string;
  islandWidth: string;
  islandDepth: string;

  // Lower Cabinets
  lowerCabinetHeight: string;
  lowerCabinetDepth: string;
  lowerCabinetStandard: boolean;

  // Upper Cabinets
  upperCabinetHeight: string;
  upperCabinetDepth: string;
  upperCabinetStandard: boolean;

  // Countertop
  countertopMaterial: CountertopMaterial | "";

  // Ceiling Cabinet
  hasCeilingCabinet: boolean;

  // Door Selection
  doorType: DoorType | "";
  hasGolaHandle: boolean;

  // Appliances
  appliances: {
    cooktop: boolean;
    oven: boolean;
    hood: boolean;
    microwave: boolean;
    dishwasher: boolean;
    refrigerator: boolean;
    washingMachine: boolean;
    boiler: boolean;
  };

  // Lighting & Outlets
  ledType: LedType;
  hasUpperLed: boolean;
  extraOutlets: string;

  // Contact Info
  fullName: string;
  phone: string;
  address: string;
  notes: string;
}

export const useKitchenConfig = () => {
  const [config, setConfig] = useState<KitchenConfig>({
    kitchenShape: "single",
    width: "",
    widthY: "",
    height: "",
    hasIsland: false,
    islandHeight: "",
    islandWidth: "",
    islandDepth: "",
    lowerCabinetHeight: "",
    lowerCabinetDepth: "",
    lowerCabinetStandard: false,
    upperCabinetHeight: "",
    upperCabinetDepth: "",
    upperCabinetStandard: false,
    countertopMaterial: "",
    hasCeilingCabinet: false,
    doorType: "",
    hasGolaHandle: false,
    appliances: {
      cooktop: false,
      oven: false,
      hood: false,
      microwave: false,
      dishwasher: false,
      refrigerator: false,
      washingMachine: false,
      boiler: false,
    },
    ledType: "none",
    hasUpperLed: false,
    extraOutlets: "",
    fullName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const updateConfig = (updates: Partial<KitchenConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  return { config, updateConfig };
};
