import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { cn } from "@/lib/utils";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const LightingSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  const ledOptions = [
    { id: "none" as const, label: "Led aydınlatma istemiyorum" },
    { id: "crown" as const, label: "Tac altı led aydınlatma istiyorum" },
    { id: "upper" as const, label: "Üst modül altı led aydınlatma istiyorum" },
  ];

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary">Led Aydınlatma İstiyor Musunuz?</h3>
        
        <div className="space-y-2">
          {ledOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                if (option.id === "none") {
                  updateConfig({ ledType: "none", hasUpperLed: false });
                } else if (option.id === "crown") {
                  updateConfig({ 
                    ledType: kitchenConfig.ledType === "crown" ? "none" : "crown"
                  });
                } else {
                  updateConfig({ 
                    hasUpperLed: !kitchenConfig.hasUpperLed 
                  });
                }
              }}
              className={cn(
                "w-full p-3 border-2 rounded-lg text-left transition-all hover:border-primary hover:bg-secondary/50",
                (option.id === "none" && kitchenConfig.ledType === "none" && !kitchenConfig.hasUpperLed) ||
                (option.id === "crown" && kitchenConfig.ledType === "crown") ||
                (option.id === "upper" && kitchenConfig.hasUpperLed)
                  ? "border-primary bg-secondary"
                  : "border-border"
              )}
            >
              <Label className="cursor-pointer font-medium">
                {option.label}
              </Label>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 border-t pt-6">
        <h3 className="text-lg font-bold text-primary">Kaç Adet Extra Priz İstersiniz?</h3>
        
        <p className="text-sm text-muted-foreground">
          • Seçtiğiniz beyaz eşya sayısı kadar priz koyulacaktır. Extra olarak kaç tane priz istediğinizi sadece sayı ile belirtiniz.
        </p>

        <div>
          <Label htmlFor="extraOutlets">Adet</Label>
          <Input
            id="extraOutlets"
            type="number"
            min="0"
            value={kitchenConfig.extraOutlets}
            onChange={(e) => updateConfig({ extraOutlets: e.target.value })}
            placeholder="0"
            className="mt-1 max-w-xs"
          />
        </div>

        <p className="text-sm text-info">
          • Baharatlık, çöp kutusu, kiler vs. mutfak sistemleri, mağazamızı ziyaret edin.
        </p>
      </div>
    </Card>
  );
};
