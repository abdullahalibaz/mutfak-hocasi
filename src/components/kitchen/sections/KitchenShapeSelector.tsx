import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { cn } from "@/lib/utils";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const KitchenShapeSelector = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  return (
    <Card className="p-6 space-y-6">
      <h2 className="text-xl font-bold text-primary">Mutfak Şeklini Seçin</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => updateConfig({ kitchenShape: "single", widthY: "" })}
          className={cn(
            "p-6 border-2 rounded-lg transition-all hover:border-primary hover:bg-secondary/50",
            kitchenConfig.kitchenShape === "single" 
              ? "border-primary bg-secondary" 
              : "border-border"
          )}
        >
          <div className="w-full h-32 mb-3 flex items-center justify-center">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <rect x="10" y="20" width="180" height="60" fill="none" stroke="currentColor" strokeWidth="3" />
              <line x1="10" y1="50" x2="190" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
          <p className="text-center font-semibold">Tek Cephe Mutfak</p>
        </button>

        <button
          onClick={() => updateConfig({ kitchenShape: "l-shape" })}
          className={cn(
            "p-6 border-2 rounded-lg transition-all hover:border-primary hover:bg-secondary/50",
            kitchenConfig.kitchenShape === "l-shape" 
              ? "border-primary bg-secondary" 
              : "border-border"
          )}
        >
          <div className="w-full h-32 mb-3 flex items-center justify-center">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <polyline points="10,20 10,80 170,80" fill="none" stroke="currentColor" strokeWidth="3" />
              <polyline points="10,20 170,20 170,80" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
          <p className="text-center font-semibold">L Mutfak</p>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="width">Genişlik X (cm)</Label>
          <Input
            id="width"
            type="number"
            value={kitchenConfig.width}
            onChange={(e) => updateConfig({ width: e.target.value })}
            placeholder="Örn: 300"
            className="mt-1"
          />
        </div>

        {kitchenConfig.kitchenShape === "l-shape" && (
          <div>
            <Label htmlFor="widthY">Genişlik Y (cm)</Label>
            <Input
              id="widthY"
              type="number"
              value={kitchenConfig.widthY}
              onChange={(e) => updateConfig({ widthY: e.target.value })}
              placeholder="Örn: 250"
              className="mt-1"
            />
          </div>
        )}

        <div>
          <Label htmlFor="height">Yükseklik H (cm)</Label>
          <p className="text-xs text-muted-foreground mb-1">Yerden Tavan Yüksekliği</p>
          <Input
            id="height"
            type="number"
            value={kitchenConfig.height}
            onChange={(e) => updateConfig({ height: e.target.value })}
            placeholder="Örn: 270"
          />
        </div>
      </div>
    </Card>
  );
};
