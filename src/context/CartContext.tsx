import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MenuItem, CartItem, CustomizationOptions } from "../types";

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (item: MenuItem, customization?: CustomizationOptions) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("white_brew_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("white_brew_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem, customization?: CustomizationOptions) => {
    const defaultCust: CustomizationOptions = {
      milk: "Oat",
      sweetness: "Regular",
      temperature: item.category === "Cold Brew" ? "Iced" : "Hot"
    };

    const finalCust = customization || defaultCust;

    // Create a unique compound ID
    const customId = `${item.id}-${finalCust.milk}-${finalCust.sweetness}-${finalCust.temperature}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === customId);
      if (existing) {
        return prev.map((i) =>
          i.id === customId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: customId, menuItem: item, quantity: 1, customization: finalCust }];
    });

    setIsOpen(true); // Open the drawer immediately on add for rich feedback
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
