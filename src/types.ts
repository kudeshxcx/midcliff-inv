/**
 * Types & Static Data for Midcliff Investments Web Portal
 */

export interface SteelMaterial {
  id: string;
  name: string;
  density: number; // g/cm3
  type: 'ferrous' | 'non-ferrous';
  basePricePerKg: number; // USD
  description: string;
}

export interface SteelShape {
  id: string;
  name: string;
  formulaDescription: string;
}

export interface ScrapMetalType {
  id: string;
  name: string;
  category: 'copper' | 'brass' | 'aluminum' | 'steel' | 'other';
  pricePerKgLead: number; // USD buy price range from e.g. $0.40 to $7.00
  unit: string;
  description: string;
}

export interface ZimCity {
  name: string;
  distanceFromRedcliff: number; // km
  description: string;
}

export interface TransportVehicle {
  id: string;
  name: string;
  capacityTonnes: number;
  ratePerKm: number; // USD per KM
  minCharge: number; // Minimum booking fee
  description: string;
}

// Global Static Databases
export const STEEL_MATERIALS: SteelMaterial[] = [
  { id: 'mild-steel', name: 'Mild Steel (Carbon)', density: 7.85, type: 'ferrous', basePricePerKg: 1.45, description: 'S275/S355 structural grade steel for general fabrication.' },
  { id: 'stainless-304', name: 'Stainless Steel 304', density: 7.93, type: 'ferrous', basePricePerKg: 3.85, description: 'Corrosion resistant steel for hygienic and food-grade use.' },
  { id: 'stainless-316', name: 'Stainless Steel 316', density: 8.00, type: 'ferrous', basePricePerKg: 4.90, description: 'Marine grade stainless steel with superior chemical resistance.' },
  { id: 'aluminum-6061', name: 'Aluminum 6061-T6', density: 2.70, type: 'non-ferrous', basePricePerKg: 3.10, description: 'Aircraft grade alloy, high strength, easy weldability.' },
  { id: 'pure-copper', name: 'Pure Red Copper', density: 8.96, type: 'non-ferrous', basePricePerKg: 9.80, description: 'Excellent electrical and thermal conductivity bar and sheets.' },
  { id: 'yellow-brass', name: 'Yellow Brass (C260)', density: 8.47, type: 'non-ferrous', basePricePerKg: 6.50, description: 'Premium decorative and machinery-grade copper-zinc alloy.' },
  { id: 'cast-iron', name: 'Cast Iron (Grey)', density: 7.20, type: 'ferrous', basePricePerKg: 1.10, description: 'High vibration damping. Excellent for heavy engine blocks.' }
];

export const STEEL_SHAPES: SteelShape[] = [
  { id: 'plate', name: 'Flat Bar / Sheet / Plate', formulaDescription: 'Length × Width × Thickness' },
  { id: 'round-bar', name: 'Solid Round Bar', formulaDescription: 'Length × Radius² × π' },
  { id: 'square-bar', name: 'Solid Square Bar', formulaDescription: 'Length × Width²' },
  { id: 'pipe', name: 'Hollow Circular Pipe', formulaDescription: 'Length × (Outer Radius² - Inner Radius²) × π' },
  { id: 'square-tube', name: 'Hollow Square Section', formulaDescription: 'Length × (Outer Width² - Inner Width²)' }
];

export const SCRAP_METALS: ScrapMetalType[] = [
  { id: 'bright-wire', name: 'Bright Bare Copper Wire', category: 'copper', pricePerKgLead: 6.20, unit: 'kg', description: 'Stripped single-strand wires, shiny, with no enamel or dirt.' },
  { id: 'heavy-copper', name: 'Heavy Copper Scrap (No. 1)', category: 'copper', pricePerKgLead: 5.50, unit: 'kg', description: 'Clean copper tubes, busbars, electrical scrap with minimal oxidation.' },
  { id: 'clean-brass', name: 'Clean Yellow Brass', category: 'brass', pricePerKgLead: 3.80, unit: 'kg', description: 'Castings, plumbing brass fittings, valves, stripped of iron additions.' },
  { id: 'aluminum-extrusion', name: 'Aluminum Extrusions (Alloy 6063)', category: 'aluminum', pricePerKgLead: 1.60, unit: 'kg', description: 'Window profiles, pipes without iron and rubber inserts.' },
  { id: 'aluminum-cans', name: 'UBC Aluminum Cans', category: 'aluminum', pricePerKgLead: 1.10, unit: 'kg', description: 'Crushed commercial beverage cans, free of sand/moisture.' },
  { id: 'heavy-melting-steel', name: 'Heavy Melting Steel (HMS 1/2)', category: 'steel', pricePerKgLead: 0.28, unit: 'kg', description: 'Industrial structural steel, machinery parts, plates > 6mm thick.' },
  { id: 'light-iron-scrap', name: 'Light Iron & Sheet Scrap', category: 'steel', pricePerKgLead: 0.18, unit: 'kg', description: 'Car body shells, roofing sheets, empty metal containers, drums.' },
  { id: 'lead-acid-batteries', name: 'Automobile Lead-Acid Batteries', category: 'other', pricePerKgLead: 0.45, unit: 'kg', description: 'Intact vehicle composite starter batteries containing lead plates.' }
];

export const ZIM_CITIES: ZimCity[] = [
  { name: 'Redcliff / Kwekwe Hub', distanceFromRedcliff: 10, description: 'Midcliff Headquarters & Distribution Center' },
  { name: 'Gweru', distanceFromRedcliff: 60, description: 'Provincial capital of Midlands' },
  { name: 'Harare', distanceFromRedcliff: 220, description: 'Capital city. Heavy industrial & construction freight' },
  { name: 'Bulawayo', distanceFromRedcliff: 220, description: 'Second largest city. Bulawayo industrial corridors' },
  { name: 'Masvingo', distanceFromRedcliff: 225, description: 'Gate to southern corridor (Great Zimbabwe)' },
  { name: 'Mutare', distanceFromRedcliff: 485, description: 'Eastern portal to Beira border corridor' },
  { name: 'Beitbridge', distanceFromRedcliff: 510, description: 'Major southern border port connecting to South Africa' },
  { name: 'Victoria Falls', distanceFromRedcliff: 658, description: 'Primary hub in north-west Matabeleland' },
  { name: 'Chinhoyi', distanceFromRedcliff: 245, description: 'Mashonaland West mining & agricultural trading hub' }
];

export const TRANSPORT_VEHICLES: TransportVehicle[] = [
  { id: 'flatbed-8t', name: '8-Tonne UD Flatbed Truck', capacityTonnes: 8, ratePerKm: 1.50, minCharge: 120, description: 'Perfect for light steel beams, angle irons, and residential scrap pickups.' },
  { id: 'tipper-15t', name: '15-Tonne Tipper / Dump Truck', capacityTonnes: 15, ratePerKm: 2.20, minCharge: 250, description: 'Ideal for aggregates, mining ores, heavy iron scrap bulk loading.' },
  { id: 'triaxle-30t', name: '30-Tonne Tri-Axle Flatbed Rig', capacityTonnes: 30, ratePerKm: 3.10, minCharge: 450, description: 'Standard heavy-duty logistics carrier for mass reinforcers and bulk imports.' },
  { id: 'lowbed-heavy', name: 'Heavy Lowbed Equipment Trailer', capacityTonnes: 45, ratePerKm: 4.50, minCharge: 600, description: 'Specialized vehicle for mining machinery, earthmovers, and massive structures.' }
];
