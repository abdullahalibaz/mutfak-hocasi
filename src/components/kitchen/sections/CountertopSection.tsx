import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const CountertopSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  const materials = [
    {
      id: "marble" as const,
      label: "Mermerit Tezgah",
      info: "• En ekonomik, en iyi seçim",
      infoColor: "text-success",
    },
    {
      id: "quartz" as const,
      label: "Kuvars Tezgah",
      info: "• Markalar; Çimstone, Calisco, Silestone, Belenco",
      infoColor: "text-info",
    },
    {
      id: "solid" as const,
      label: "Masif Tezgah",
      info: "• Estetik olarak güzeldir, ama çizilme yapar düzenli cila ister, su ve neme karşı biraz hassastır",
      infoColor: "text-warning",
    },
    {
      id: "porcelain" as const,
      label: "Porselen Tezgah",
      info: null,
      infoColor: "",
    },
  ];

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-primary">Tezgah Malzemesini Seçiniz</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {materials.map((material) => (
          <button
            key={material.id}
            onClick={() => updateConfig({ countertopMaterial: material.id })}
            className={cn(
              "p-4 border-2 rounded-lg text-left transition-all hover:border-primary hover:bg-secondary/50 relative",
              kitchenConfig.countertopMaterial === material.id
                ? "border-primary bg-secondary"
                : "border-border"
            )}
          >
            {kitchenConfig.countertopMaterial === material.id && (
              <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary" />
            )}
            <Label className="font-semibold cursor-pointer block mb-2">
              {material.label}
            </Label>
            {material.info && (
              <p className={cn("text-sm", material.infoColor)}>
                {material.info}
              </p>
            )}
          </button>
        ))}
      </div>
    </Card>
  );
};
