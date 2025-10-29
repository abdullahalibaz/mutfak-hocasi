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
              {/* Horizontal rectangle for single front kitchen */}
              <rect x="40" y="30" width="120" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
              
              {/* X dimension label below */}
              <text x="100" y="75" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">X</text>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
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
            <svg viewBox="0 0 200 120" className="w-full h-full">
              {/* L-shape: vertical part on left, horizontal part at bottom */}
              <rect x="60" y="20" width="25" height="55" fill="none" stroke="currentColor" strokeWidth="3" />
              <rect x="60" y="60" width="80" height="25" fill="none" stroke="currentColor" strokeWidth="3" />
              
              {/* Y dimension label at top */}
              <text x="72.5" y="15" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Y</text>
              
              {/* X dimension label at right side */}
              <text x="145" y="72.5" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">X</text>
              
              <defs>
                <marker id="arrowhead-l" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
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
