import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const DoorSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  const doors = [
    { id: "lake" as const, label: "Lake Kapak" },
    { id: "flat" as const, label: "Düz Kapak" },
    { id: "membrane" as const, label: "Membran Kapak" },
    { id: "solid-veneer" as const, label: "Masif Kaplama Kapak" },
    { id: "tempered-glass" as const, label: "Temperli Cam Kapak" },
  ];

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-primary">Kapak Seçimi Yapınız</h2>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>• Mutfağınızda birden fazla farklı kapak olsun isterseniz, burada herhangi bir kapak modelini seçiniz.</p>
        <p>• Temperli Cam Kapak sadece üst modüle uygulanabilmektedir. Eğer bu seçeneği seçerseniz alt modüller ve tavan dolabı (eğer tavan dolabı seçeneğini seçtiyseniz) otomatik "düz kapak" olarak hesaplanmaktadır.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
        {doors.map((door) => (
          <button
            key={door.id}
            onClick={() => updateConfig({ doorType: door.id })}
            className={cn(
              "p-4 border-2 rounded-lg text-left transition-all hover:border-primary hover:bg-secondary/50 relative",
              kitchenConfig.doorType === door.id
                ? "border-primary bg-secondary"
                : "border-border"
            )}
          >
            {kitchenConfig.doorType === door.id && (
              <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary" />
            )}
            <Label className="font-semibold cursor-pointer">
              {door.label}
            </Label>
          </button>
        ))}
      </div>

      <div className="space-y-2 border-t pt-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="golaHandle"
            checked={kitchenConfig.hasGolaHandle}
            onCheckedChange={(checked) => updateConfig({ hasGolaHandle: checked as boolean })}
          />
          <Label htmlFor="golaHandle" className="font-semibold cursor-pointer">
            Gola kulp istiyorum
          </Label>
        </div>
        <p className="text-sm text-muted-foreground pl-6">
          • Gola kulp, gizli kulp demektir. Eski tip kulplara göre gizlidir dışardan görünmez.
        </p>
      </div>
    </Card>
  );
};
