import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { KitchenConfig } from "@/hooks/useKitchenConfig";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const ContactSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-primary">İletişim Bilgileriniz</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Ad Soyad *</Label>
          <Input
            id="fullName"
            value={kitchenConfig.fullName}
            onChange={(e) => updateConfig({ fullName: e.target.value })}
            placeholder="Adınız ve Soyadınız"
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefon Numarası *</Label>
          <Input
            id="phone"
            type="tel"
            value={kitchenConfig.phone}
            onChange={(e) => updateConfig({ phone: e.target.value })}
            placeholder="0500 000 00 00"
            className="mt-1"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Adres *</Label>
        <Textarea
          id="address"
          value={kitchenConfig.address}
          onChange={(e) => updateConfig({ address: e.target.value })}
          placeholder="Tam adresiniz"
          className="mt-1 min-h-20"
          required
        />
      </div>

      <div>
        <Label htmlFor="notes">Eklemek İstediğiniz Notlar</Label>
        <Textarea
          id="notes"
          value={kitchenConfig.notes}
          onChange={(e) => updateConfig({ notes: e.target.value })}
          placeholder="Varsa özel istekleriniz veya sorularınız..."
          className="mt-1 min-h-20"
        />
      </div>
    </Card>
  );
};
