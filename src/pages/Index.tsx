import { useState } from "react";
import { KitchenConfigurator } from "@/components/kitchen/KitchenConfigurator";
import { PriceSummary } from "@/components/kitchen/PriceSummary";
import { useKitchenConfig } from "@/hooks/useKitchenConfig";

const Index = () => {
  const config = useKitchenConfig();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Mutfak Tasarım Konfiguratörü
          </h1>
          <p className="text-center mt-2 text-sm md:text-base opacity-90">
            Hayalinizdeki mutfağı tasarlayın, anında fiyat alın
          </p>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <KitchenConfigurator config={config} />
          </div>
          <div className="lg:col-span-1">
            <PriceSummary config={config} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
