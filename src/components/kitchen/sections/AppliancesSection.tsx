import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { KitchenConfig } from "@/hooks/useKitchenConfig";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const AppliancesSection = ({ config }: Props) => {
  const { config: kitchenConfig, updateConfig } = config;

  const appliances = [
    { id: "cooktop", label: "Ankastre Ocak" },
    { id: "oven", label: "Ankastre Fırın" },
    { id: "hood", label: "Ankastre Davlumbaz" },
    { id: "microwave", label: "Mikrodalga Fırın" },
    { id: "dishwasher", label: "Bulaşık Makinesi" },
    { id: "refrigerator", label: "Buzdolabı" },
    { id: "washingMachine", label: "Çamaşır Makinesi" },
    { id: "boiler", label: "Kombi veya Şofben" },
  ];

  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-primary">
        Mutfakta Kullanılacak Beyaz Eşyaları Seçiniz
      </h2>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>• Sadece yapılacak olan mutfak dolabına entegre olacak beyaz eşyaları seçiniz. Örneğin: Buzdolabı mutfağınızın farklı bir köşesine gelecek, dolapla bağlantısı olmayacaksa seçmeyiniz.</p>
        <p>• Çamaşır Makinesinin mutfakta olması önerilmez, eğer evinizde koyacak başka bir yeriniz yoksa seçebilirsiniz.</p>
        <p>• Mikrodalga Fırını tezgah üstüne koyacaksanız, mutfak dolabında extra bir yer temin edilmesini istemiyorsanız seçmeyiniz.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
        {appliances.map((appliance) => (
          <div key={appliance.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary/50 transition-colors">
            <Checkbox
              id={appliance.id}
              checked={kitchenConfig.appliances[appliance.id as keyof typeof kitchenConfig.appliances]}
              onCheckedChange={(checked) =>
                updateConfig({
                  appliances: {
                    ...kitchenConfig.appliances,
                    [appliance.id]: checked as boolean,
                  },
                })
              }
            />
            <Label htmlFor={appliance.id} className="cursor-pointer flex-1">
              {appliance.label}
            </Label>
          </div>
        ))}
      </div>
    </Card>
  );
};
