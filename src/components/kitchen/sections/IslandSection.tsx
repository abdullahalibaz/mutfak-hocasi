import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { AlertCircle } from "lucide-react";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const IslandSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasIsland"
          checked={kitchenConfig.hasIsland}
          onCheckedChange={(checked) => 
            updateConfig({ 
              hasIsland: checked as boolean,
              islandHeight: "",
              islandWidth: "",
              islandDepth: ""
            })
          }
        />
        <Label htmlFor="hasIsland" className="font-semibold cursor-pointer">
          + Ada Mutfak Tezgahı eklemek istiyorum
        </Label>
      </div>

      <div className="flex items-start gap-2 text-sm text-destructive">
        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <span>Not: Dar mutfaklar için önerilmez</span>
      </div>

      {kitchenConfig.hasIsland && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
          <div>
            <Label htmlFor="islandHeight">Yükseklik (cm)</Label>
            <Input
              id="islandHeight"
              type="number"
              value={kitchenConfig.islandHeight}
              onChange={(e) => updateConfig({ islandHeight: e.target.value })}
              placeholder="Örn: 90"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="islandWidth">Genişlik (cm)</Label>
            <Input
              id="islandWidth"
              type="number"
              value={kitchenConfig.islandWidth}
              onChange={(e) => updateConfig({ islandWidth: e.target.value })}
              placeholder="Örn: 120"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="islandDepth">Derinlik (cm)</Label>
            <Input
              id="islandDepth"
              type="number"
              value={kitchenConfig.islandDepth}
              onChange={(e) => updateConfig({ islandDepth: e.target.value })}
              placeholder="Örn: 80"
              className="mt-1"
            />
          </div>
        </div>
      )}
    </Card>
  );
};
