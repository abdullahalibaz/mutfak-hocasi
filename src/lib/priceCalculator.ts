import { KitchenConfig } from "@/hooks/useKitchenConfig";

const COUNTERTOP_PRICES = {
  marble: 3500,
  quartz: 7000,
  solid: 3700,
  porcelain: 6000,
};

const DOOR_PRICES = {
  flat: 7500,
  lake: 10500,
  membrane: 10500,
  "solid-veneer": 10500,
  "tempered-glass": 12000,
};

export const calculateTotalPrice = (config: KitchenConfig): number => {
  let total = 0;

  // 1. Countertop calculation
  if (config.countertopMaterial && config.width) {
    const widthInMeters = parseFloat(config.width) / 100;
    const widthYInMeters = config.kitchenShape === "l-shape" && config.widthY 
      ? parseFloat(config.widthY) / 100 
      : 0;
    const totalWidth = widthInMeters + widthYInMeters;
    
    total += totalWidth * COUNTERTOP_PRICES[config.countertopMaterial];
  }

  // 2. Cabinet calculation
  if (config.doorType && config.width && config.lowerCabinetHeight && config.upperCabinetHeight) {
    const widthInMeters = parseFloat(config.width) / 100;
    const widthYInMeters = config.kitchenShape === "l-shape" && config.widthY 
      ? parseFloat(config.widthY) / 100 
      : 0;
    const totalWidthL = widthInMeters + widthYInMeters;

    if (config.doorType === "tempered-glass") {
      // Upper cabinets with tempered glass
      const upperHeightInMeters = parseFloat(config.upperCabinetHeight) / 100;
      total += upperHeightInMeters * totalWidthL * 12000;

      // Lower cabinets (and ceiling if applicable) with flat door
      let lowerAndCeilingHeight = parseFloat(config.lowerCabinetHeight) / 100;
      
      if (config.hasCeilingCabinet && config.height) {
        const totalHeight = parseFloat(config.height) / 100;
        const usedHeight = (parseFloat(config.lowerCabinetHeight) + parseFloat(config.upperCabinetHeight) + 45) / 100;
        const ceilingHeight = totalHeight - usedHeight;
        lowerAndCeilingHeight += ceilingHeight;
      }

      const lowerArea = lowerAndCeilingHeight * totalWidthL;
      total += lowerArea * 7500;
    } else {
      // All cabinets with same door type
      let totalCabinetHeight = (parseFloat(config.lowerCabinetHeight) + parseFloat(config.upperCabinetHeight)) / 100;
      
      if (config.hasCeilingCabinet && config.height) {
        const totalHeight = parseFloat(config.height) / 100;
        const usedHeight = (parseFloat(config.lowerCabinetHeight) + parseFloat(config.upperCabinetHeight) + 45) / 100;
        const ceilingHeight = totalHeight - usedHeight;
        totalCabinetHeight += ceilingHeight;
      }

      const cabinetArea = totalCabinetHeight * totalWidthL;
      const pricePerSqm = DOOR_PRICES[config.doorType] || 7500;
      total += cabinetArea * pricePerSqm;
    }
  }

  // 3. LED lighting
  if (config.ledType !== "none" && config.width) {
    const widthInMeters = parseFloat(config.width) / 100;
    const widthYInMeters = config.kitchenShape === "l-shape" && config.widthY 
      ? parseFloat(config.widthY) / 100 
      : 0;
    const totalWidth = widthInMeters + widthYInMeters;
    total += totalWidth * 250;
  }

  if (config.hasUpperLed && config.width) {
    const widthInMeters = parseFloat(config.width) / 100;
    const widthYInMeters = config.kitchenShape === "l-shape" && config.widthY 
      ? parseFloat(config.widthY) / 100 
      : 0;
    const totalWidth = widthInMeters + widthYInMeters;
    total += totalWidth * 250;
  }

  // 4. Extra outlets
  if (config.extraOutlets) {
    const outlets = parseInt(config.extraOutlets);
    if (!isNaN(outlets)) {
      total += outlets * 100;
    }
  }

  // 5. Refrigerator discount
  if (config.appliances.refrigerator) {
    total -= 5000;
  }

  return Math.max(0, total);
};
