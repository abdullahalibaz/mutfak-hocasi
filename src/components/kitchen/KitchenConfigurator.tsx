import { KitchenShapeSelector } from "./sections/KitchenShapeSelector";
import { IslandSection } from "./sections/IslandSection";
import { CabinetSection } from "./sections/CabinetSection";
import { CountertopSection } from "./sections/CountertopSection";
import { DoorSection } from "./sections/DoorSection";
import { AppliancesSection } from "./sections/AppliancesSection";
import { LightingSection } from "./sections/LightingSection";
import { ContactSection } from "./sections/ContactSection";
import { KitchenConfig } from "@/hooks/useKitchenConfig";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const KitchenConfigurator = ({ config }: Props) => {
  return (
    <div className="space-y-6">
      <KitchenShapeSelector config={config} />
      <IslandSection config={config} />
      <CabinetSection config={config} />
      <CountertopSection config={config} />
      <DoorSection config={config} />
      <AppliancesSection config={config} />
      <LightingSection config={config} />
      <ContactSection config={config} />
    </div>
  );
};
