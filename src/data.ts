import { MenuItem, Testimonial, TimelineItem, BeanOrigin, BrewingStep } from "./types";
import coffeeHero from "./assets/images/coffee_hero_1781348519300.jpg";
import coffeeMatcha from "./assets/images/coffee_matcha_1781348563967.jpg";
import coffeePour from "./assets/images/coffee_pour_1781348533827.jpg";
import coffeeInterior from "./assets/images/coffee_interior_1781348548747.jpg";

export const MENU_ITEMS: MenuItem[] = [
  // Espresso
  {
    id: "esp_1",
    name: "Classic Espresso",
    description: "Concentrated double shot of our premium signature single-origin beans. Rich crema, bold profile, notes of dark chocolate and orange zest.",
    price: 4.5,
    category: "Espresso",
    image: "https://images.unsplash.com/photo-1510707513156-46c49f1db7a6?w=600&q=80",
    isBestSeller: false,
    notes: "Signature Roast"
  },
  {
    id: "esp_2",
    name: "Espresso Macchiato",
    description: "Classic double shot marked with a delicate dollop of silky, micro-foamed oat milk.",
    price: 4.8,
    category: "Espresso",
    image: "https://images.unsplash.com/photo-1552346988-47162a937a00?w=600&q=80",
    isBestSeller: false
  },
  // Cappuccino
  {
    id: "cap_1",
    name: "Velvet Cappuccino",
    description: "Equal parts espresso, steamed milk, and beautiful deep milk foam. Crafted to perfect balanced sweetness.",
    price: 5.5,
    category: "Cappuccino",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
    isFeatured: true,
    isBestSeller: true,
    notes: "Chef's Choice"
  },
  // Latte
  {
    id: "lat_1",
    name: "Signature White Latte",
    description: "Our hallmark drink. Double shot of espresso layered over meticulously steamed, sweet oat milk with delicate rosetta art.",
    price: 5.8,
    category: "Latte",
    image: coffeeHero, // Using our generated high-res hero latte shot
    isFeatured: true,
    isBestSeller: true,
    notes: "House Classic"
  },
  {
    id: "lat_2",
    name: "Madagascar Vanilla Bean Latte",
    description: "Infused with cold-pressed real Madagascar vanilla bean caviar. High-end, subtle natural aromatics.",
    price: 6.5,
    category: "Latte",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80",
    isFeatured: false,
    isBestSeller: false
  },
  // Americano
  {
    id: "ame_1",
    name: "Americano Blanc",
    description: "Premium double shot pulled directly over filtered ice-cold and hot water, finishing with a crisp, pure profile.",
    price: 4.8,
    category: "Americano",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    isBestSeller: false
  },
  // Mocha
  {
    id: "moc_1",
    name: "Ecuadorian Dark Chocolate Mocha",
    description: "Espresso and steamed milk swirled with single-origin, 72% dark Ecuadorian chocolate, dusted with raw organic cacao powder.",
    price: 6.2,
    category: "Mocha",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80",
    isBestSeller: true,
    notes: "Luxurious Dream"
  },
  // Cold Brew
  {
    id: "col_1",
    name: "24-Hour Kyoto Dripped Cold Brew",
    description: "Slow-dripped over a 24-hour period using custom glass towers. Incredibly low acidity, clean taste, heavy fruit and floral notes.",
    price: 6.0,
    category: "Cold Brew",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
    isFeatured: true,
    isBestSeller: true,
    notes: "Limited Daily Output"
  },
  {
    id: "col_2",
    name: "Sea Salt Cream Cold Brew",
    description: "Our signature dense Kyoto Cold Brew, crowned with a velvety, hand-whipped sea salt cream float.",
    price: 6.5,
    category: "Cold Brew",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    isBestSeller: false
  },
  // Matcha
  {
    id: "mat_1",
    name: "Uji Ceremonial Matcha Latte",
    description: "Stone-ground Organic Ceremonial Matcha whisked traditionally in bamboo bowls, combined with a touch of agave and creamy almond milk.",
    price: 6.5,
    category: "Matcha",
    image: coffeeMatcha, // Using our generated matcha image
    isFeatured: true,
    isBestSeller: false,
    notes: "Organic & Ceremonial"
  },
  // Pastries
  {
    id: "pas_1",
    name: "Artisanal Butter Croissant",
    description: "French-method laminated dough with premium Normandy butter. Over 81 flaky, paper-thin, melt-in-your-mouth layers.",
    price: 4.5,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    isFeatured: true,
    isBestSeller: true,
    notes: "Freshly Baked Daily"
  },
  {
    id: "pas_2",
    name: "Basque Burnt Honey Cheesecake",
    description: "Crustless Basque-style cheesecake baked in high heat for a caramelized exterior and a deeply creamy, custard center.",
    price: 7.2,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=600&q=80",
    isFeatured: false,
    isBestSeller: false,
    notes: "Slightly Sweet"
  },
  {
    id: "pas_3",
    name: "Cardamom Bun",
    description: "Traditional Swedish-style braided bun, spiced with freshly crushed green cardamom seeds and topped with pearl sugar.",
    price: 5.0,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    isBestSeller: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t_1",
    name: "Clara Vance",
    role: "Architect & Designer",
    review: "White Brew Coffee is an architectural masterpiece of both café design and coffee roasting. The minimalist white environment creates a meditative headspace, and the 24-Hour Cold Brew is unmatched in clarity and depth.",
    rating: 5,
    date: "Jun 2026"
  },
  {
    id: "t_2",
    name: "Julian Brooks",
    role: "Digital Nomad",
    review: "My absolute favorite morning ritual. The signature white latte with oat milk is velvety-smooth. There's an unmatched curation of beans here. Every visit feels like stepping into a serene sanctuary.",
    rating: 5,
    date: "May 2026"
  },
  {
    id: "t_3",
    name: "Mei Lin",
    role: "Food Photographer",
    review: "The aesthetic of White Brew is a dream, but the actual craft is even better. Standard-setting Ceremonial Matcha and pastries that rival top Paris bakeries. Every detail, from the ceramic mugs to lighting, is perfect.",
    rating: 5,
    date: "Apr 2026"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "The Vision",
    description: "Founded by a group of passionate designers and specialty coffee roasters who wanted to strip away the noise of typical heavy coffee shops, focusing purely on pristine white design and standard-setting bean selection."
  },
  {
    year: "2024",
    title: "Opening the Sanctuary",
    description: "Opened our flagship location in the design district. Crafted from raw white concrete, Italian marble, and Japanese white oak, establishing an oasis of pure coffee focus."
  },
  {
    year: "2025",
    title: "Roastery & Single-Sourcing",
    description: "Launched our internal micro-roastery facility, establishing direct direct-trade relationships with organic micro-lots in Colombia, Ethiopia, and Panama."
  },
  {
    year: "2026",
    title: "Cult-Classic Status",
    description: "Acclaimed as one of the best minimalist coffee concepts globally, introducing limited Kyoto drippers and premium stone-ground matcha programs."
  }
];

export const CHOOSE_US_REASONS = [
  {
    icon: "Bean",
    title: "Single-Origin Micro-Lots",
    description: "We source our beans through ethical, direct-trade agreements with family-owned micro-lots. Every cup is fully trace-backed to its farm of origin."
  },
  {
    icon: "Compass",
    title: "Artisanal Micro-Roasting",
    description: "Roasted weekly in ultra-small 5kg batches to lock in pristine terroir properties, avoiding high heats to maintain the bean's authentic natural notes."
  },
  {
    icon: "Sparkles",
    title: "Standard of Precision",
    description: "We measure water chemistry, milk temperatures, and extraction ratios to the decimal millimeter. Coffee is our science; minimalism is our philosophy."
  }
];

export const BEAN_ORIGINS: BeanOrigin[] = [
  {
    region: "Gesha Micro-Lot",
    country: "Panama",
    notes: "Jasmine, Bergamot, Honey, Peach",
    elevation: "1,950m",
    process: "Washed / Traditional",
    roastLevel: "Light",
    color: "bg-amber-50"
  },
  {
    region: "Yirgacheffe Kochere",
    country: "Ethiopia",
    notes: "Blueberry, Meyer Lemon, Black Tea florets",
    elevation: "2,100m",
    process: "Natural sun-dried",
    roastLevel: "Light",
    color: "bg-stone-50"
  },
  {
    region: "Finca El Paraiso",
    country: "Colombia",
    notes: "Spiced Apple, Toffee, Dark Cacao, Almond",
    elevation: "1,850m",
    process: "Double anaerobic thermal shock",
    roastLevel: "Medium",
    color: "bg-orange-50"
  }
];

export const BREWING_STEPS: BrewingStep[] = [
  {
    step: 1,
    title: "The Grind Selection",
    description: "Sifting 20g of micro-lot beans into a medium-coarse grind resembling sea salt. Sifting removes micro-dust to avoid over-extraction bitterness.",
    time: "0:00"
  },
  {
    step: 2,
    title: "Thermal Pre-Soak",
    description: "Wetting the Japanese bleached-paper filter with 93.5°C pure water to pre-heat the brewer and purge paper-taste before adding coffee grounds.",
    time: "0:20"
  },
  {
    step: 3,
    title: "The Pure Bloom",
    description: "Pouring exactly 50g of mineral-balanced water. Allowing the gases to escape for 45 seconds. Watch the grounds rise and swell gracefully.",
    time: "1:05"
  },
  {
    step: 4,
    title: "Continuous Fluid Spirals",
    description: "Pouring the remaining 270g in steady concentric circular motions without touching the paper walls. Total extraction time is calibrated to 3 minutes.",
    time: "3:00"
  }
];

export const GALLERY_PHOTOS = [
  {
    url: coffeePour, // our beautiful pour-over shot
    alt: "Manual hand brew V60 extraction process at White Brew Coffee",
    caption: "The Precision V60 Hand Brew"
  },
  {
    url: coffeeInterior, // our beautiful interior shot
    alt: "Beautiful minimalist architectural design of White Brew dining space",
    caption: "Our Serene Architectural Oasis"
  },
  {
    url: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1000&q=80",
    alt: "Beautiful detail of espresso extraction with pure golden crema flowing",
    caption: "Single-Origin Lever Extraction"
  },
  {
    url: coffeeHero, // our hero shot
    alt: "Signature White Latte close-up on clean white table with soft morning lighting",
    caption: "Signature Pure Latte Art"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&q=80",
    alt: "Roasting premium fresh coffee beans in our micro batch roastery",
    caption: "Our Custom Micro-Roasting Facility"
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80",
    alt: "Sleek coffee cups paired on clean light marble workspace table",
    caption: "Coffee Pairings & Shared Moments"
  }
];
