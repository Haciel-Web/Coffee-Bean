export type MenuCategory =
  | "Espresso"
  | "Cappuccino"
  | "Latte"
  | "Americano"
  | "Mocha"
  | "Cold Brew"
  | "Matcha"
  | "Pastries";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  notes?: string;
}

export interface CustomizationOptions {
  milk: "Whole" | "Oat" | "Almond" | "Coconut";
  sweetness: "None" | "Less (50%)" | "Regular" | "Sweet";
  temperature: "Hot" | "Iced";
}

export interface CartItem {
  id: string; // unique combination of item ID + customizations
  menuItem: MenuItem;
  quantity: number;
  customization?: CustomizationOptions;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  date: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface PremiumFeature {
  icon: string;
  title: string;
  description: string;
}

export interface BeanOrigin {
  region: string;
  country: string;
  notes: string;
  elevation: string;
  process: string;
  roastLevel: "Light" | "Medium" | "Dark";
  color: string;
}

export interface BrewingStep {
  step: number;
  title: string;
  description: string;
  time: string;
}
