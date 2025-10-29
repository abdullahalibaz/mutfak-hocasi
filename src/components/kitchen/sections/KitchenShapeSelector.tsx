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
              <rect x="20" y="25" width="160" height="50" fill="none" stroke="currentColor" strokeWidth="3" />
              {/* X dimension arrow */}
              <line x1="20" y1="85" x2="180" y2="85" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
              <text x="100" y="95" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">X</text>
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
              {/* Simple L-shape - two rectangles forming an L (outline only) */}
              <rect x="30" y="25" width="15" height="60" fill="none" stroke="currentColor" strokeWidth="3" />
              <rect x="30" y="70" width="130" height="15" fill="none" stroke="currentColor" strokeWidth="3" />
              
              {/* X dimension arrow (horizontal) */}
              <line x1="30" y1="95" x2="160" y2="95" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
              <text x="95" y="108" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">X</text>
              
              {/* Y dimension arrow (vertical) */}
              <line x1="15" y1="25" x2="15" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
              <text x="8" y="50" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Y</text>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
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
