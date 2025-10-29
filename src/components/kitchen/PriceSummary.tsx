import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KitchenConfig } from "@/hooks/useKitchenConfig";
import { calculateTotalPrice } from "@/lib/priceCalculator";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface Props {
  config: {
    config: KitchenConfig;
    updateConfig: (updates: Partial<KitchenConfig>) => void;
  };
}

export const PriceSummary = ({ config }: Props) => {
  const totalPrice = calculateTotalPrice(config.config);

  const handleSubmit = () => {
    const { fullName, phone, address } = config.config;
    
    if (!fullName || !phone || !address) {
      toast.error("Lütfen iletişim bilgilerinizi doldurunuz");
      return;
    }

    toast.success("Talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
    console.log("Kitchen Configuration:", config.config);
  };

  return (
    <div className="sticky top-6">
      <Card className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">
            TOPLAM TUTAR (İşçilik Dahil)
          </h2>
          <p className="text-3xl font-bold text-accent">
            {totalPrice.toLocaleString("tr-TR")} ₺
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">
          <p className="flex items-start gap-2">
            <span className="text-destructive font-bold">•</span>
            <span>Fiyatlara kırım, söküm dahil değildir.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-destructive font-bold">•</span>
            <span>Tüm hesaplamalar MDF üzerinden yapılmaktadır. Sunta değildir.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-destructive font-bold">•</span>
            <span>
              Kullanılacak tüm menteşeler, çekmece rayları, amortisörler frenli sistem
              olarak hesaplanmaktadır. Farklı bir seçim yapılamamaktadır.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-destructive font-bold">•</span>
            <span>
              Evinizdeki kolon, kiriş gibi taşıyıcılara hiçbir şekilde müdahale
              edilmemektedir. Lütfen teklif etmeyiniz.
            </span>
          </p>
        </div>

        <Button 
          onClick={handleSubmit} 
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          size="lg"
        >
          <Send className="w-4 h-4 mr-2" />
          Randevu almak için Gönder
        </Button>
      </Card>
    </div>
  );
};
