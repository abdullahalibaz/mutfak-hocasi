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

export const CabinetSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  const validateLowerHeight = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;
    if (num < 85) return "Standartlara göre bu yükseklik düşük";
    if (num > 95) return "Standartlara göre bu yükseklik fazla";
    return null;
  };

  const validateLowerDepth = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;
    if (num < 55) return "Standartlara göre bu derinlik düşük";
    if (num > 65) return "Standartlara göre bu derinlik yüksek";
    return null;
  };

  const validateUpperHeight = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;
    if (num < 65) return "Standartlara göre bu yükseklik düşük";
    if (num > 75) return "Standartlara göre bu yükseklik fazla";
    return null;
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary">Alt Dolap</h3>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lowerStandard"
              checked={kitchenConfig.lowerCabinetStandard}
              onCheckedChange={(checked) => {
                if (checked) {
                  updateConfig({
                    lowerCabinetStandard: true,
                    lowerCabinetHeight: "90",
                    lowerCabinetDepth: "60",
                  });
                } else {
                  updateConfig({ lowerCabinetStandard: false });
                }
              }}
            />
            <Label htmlFor="lowerStandard" className="text-sm cursor-pointer">
              Evrensel ölçü standartları
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="lowerHeight">Yükseklik (cm)</Label>
            <Input
              id="lowerHeight"
              type="number"
              value={kitchenConfig.lowerCabinetHeight}
              onChange={(e) => updateConfig({ lowerCabinetHeight: e.target.value })}
              placeholder="90"
              className="mt-1"
            />
            {kitchenConfig.lowerCabinetHeight && validateLowerHeight(kitchenConfig.lowerCabinetHeight) && (
              <div className="flex items-start gap-2 text-sm text-destructive mt-1">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{validateLowerHeight(kitchenConfig.lowerCabinetHeight)}</span>
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="lowerDepth">Derinlik (cm)</Label>
            <Input
              id="lowerDepth"
              type="number"
              value={kitchenConfig.lowerCabinetDepth}
              onChange={(e) => updateConfig({ lowerCabinetDepth: e.target.value })}
              placeholder="60"
              className="mt-1"
            />
            {kitchenConfig.lowerCabinetDepth && validateLowerDepth(kitchenConfig.lowerCabinetDepth) && (
              <div className="flex items-start gap-2 text-sm text-destructive mt-1">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{validateLowerDepth(kitchenConfig.lowerCabinetDepth)}</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          • Standart ankastre ocak ve fırın kullanıyorsanız derinlik 60 cm olmalıdır.
        </p>
      </div>

      <div className="space-y-4 border-t pt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary">Üst Dolap</h3>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="upperStandard"
              checked={kitchenConfig.upperCabinetStandard}
              onCheckedChange={(checked) => {
                if (checked) {
                  updateConfig({
                    upperCabinetStandard: true,
                    upperCabinetHeight: "72",
                    upperCabinetDepth: "33",
                  });
                } else {
                  updateConfig({ upperCabinetStandard: false });
                }
              }}
            />
            <Label htmlFor="upperStandard" className="text-sm cursor-pointer">
              Evrensel ölçü standartları
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="upperHeight">Yükseklik (cm)</Label>
            <Input
              id="upperHeight"
              type="number"
              value={kitchenConfig.upperCabinetHeight}
              onChange={(e) => updateConfig({ upperCabinetHeight: e.target.value })}
              placeholder="72"
              className="mt-1"
            />
            {kitchenConfig.upperCabinetHeight && validateUpperHeight(kitchenConfig.upperCabinetHeight) && (
              <div className="flex items-start gap-2 text-sm text-destructive mt-1">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{validateUpperHeight(kitchenConfig.upperCabinetHeight)}</span>
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="upperDepth">Derinlik (cm)</Label>
            <Input
              id="upperDepth"
              type="number"
              value={kitchenConfig.upperCabinetDepth}
              onChange={(e) => updateConfig({ upperCabinetDepth: e.target.value })}
              placeholder="33"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t pt-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasCeiling"
            checked={kitchenConfig.hasCeilingCabinet}
            onCheckedChange={(checked) => updateConfig({ hasCeilingCabinet: checked as boolean })}
          />
          <Label htmlFor="hasCeiling" className="font-semibold cursor-pointer">
            Tavan Dolabı istiyorum
          </Label>
        </div>
        <div className="text-sm text-muted-foreground space-y-1 pl-6">
          <p>• Tavan Dolabı Üst Dolaptan sonra tavana kadar olan extra bir dolaptır.</p>
          <p>• Üst dolabın üstünde toz ve yemek yaparken yağ buharlarının birikmesini engeller, estetik olarak tamamlayıcıdır.</p>
          <p>• Bu modülün ölçüsü alt ve üst dolaptan sonra tavan yüksekliğinden kalan ölçü kadar olmaktadır</p>
        </div>
      </div>
    </Card>
  );
};
