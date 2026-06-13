import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, MapPin, Coffee } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart
  } = useCart();

  const [orderType, setOrderType] = useState<"pickup" | "dinein">("pickup");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState<any>(null);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName) return;

    const receiptNum = `WB-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) + " " + now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

    setPlacedOrderDetails({
      receiptNum,
      date: formattedDate,
      name: customerName,
      phone: customerPhone,
      table: orderType === "dinein" ? tableNumber : null,
      notes: customNotes,
      type: orderType === "pickup" ? "STORE PICKUP" : `DINE-IN (TABLE ${tableNumber})`,
      items: [...cart],
      subtotal: cartTotal,
      tax: cartTotal * 0.08,
      total: cartTotal * 1.08,
      prepTime: "8-12 mins"
    });

    setOrderPlaced(true);
    clearCart(); // clear current cart
  };

  const closeReceipt = () => {
    setOrderPlaced(false);
    setPlacedOrderDetails(null);
    setIsOpen(false);
    // reset form fields
    setCustomerName("");
    setCustomerPhone("");
    setTableNumber("");
    setCustomNotes("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!orderPlaced) setIsOpen(false);
            }}
            className="fixed inset-0 bg-[#000000] z-50 backdrop-blur-xs"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-[#FFFFFF] shadow-2xl z-50 flex flex-col border-l border-[#EAEAEA]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#EAEAEA] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-[#6F4E37] stroke-[1.25]" />
                <h3 className="font-serif text-lg tracking-wide text-[#111111] font-medium uppercase">
                  {orderPlaced ? "Order Confirmed" : "Your Order"}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Scrollable Contents Grid/Form */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {orderPlaced && placedOrderDetails ? (
                /* ORDER RECEIPT PREVIEW */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center py-4">
                    <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-3">
                      <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="font-serif text-xl font-normal text-emerald-800">
                      Receipt Generated
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                      Your specialty brew sequence is initiated inside our roastery bar.
                    </p>
                  </div>

                  {/* Monospaced Thermal Receipt Visual */}
                  <div className="bg-[#F8F6F2] p-6 border-dashed border-2 border-stone-300 rounded-sm font-mono text-xs text-[#111111] space-y-4 shadow-inner relative overflow-hidden">
                    {/* Decorative side notches */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-6 rounded-full bg-[#FFFFFF]" />
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-6 rounded-full bg-[#FFFFFF]" />

                    <div className="text-center border-b border-stone-300 pb-4 space-y-1">
                      <span className="font-serif text-sm tracking-widest font-normal uppercase">
                        WHITE BREW COFFEE
                      </span>
                      <p className="text-[9px] uppercase tracking-wider text-zinc-400">
                        14 Specialty Row, Design District
                      </p>
                      <p className="text-[9px] text-zinc-400">TEL: +1 (555) 019-2831</p>
                    </div>

                    <div className="space-y-1 text-[10px] border-b border-stone-300 pb-3">
                      <div className="flex justify-between">
                        <span>RECEIPT NO:</span>
                        <span className="font-bold">{placedOrderDetails.receiptNum}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DATE & TIME:</span>
                        <span>{placedOrderDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUSTOMER:</span>
                        <span className="uppercase font-bold">{placedOrderDetails.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ORDER TYPE:</span>
                        <span className="font-bold text-[#6F4E37]">{placedOrderDetails.type}</span>
                      </div>
                    </div>

                    {/* Receipt Items */}
                    <div className="space-y-3 py-2 border-b border-stone-300">
                      {placedOrderDetails.items.map((i: any) => (
                        <div key={i.id} className="space-y-1 text-[10px]">
                          <div className="flex justify-between font-bold">
                            <span>
                              {i.quantity}x {i.menuItem.name}
                            </span>
                            <span>${(i.menuItem.price * i.quantity).toFixed(2)}</span>
                          </div>
                          {i.customization && (
                            <div className="text-[9px] text-zinc-400 leading-tight pl-2 flex flex-col">
                              <span>• Temp: {i.customization.temperature}</span>
                              <span>• Blend: {i.customization.milk} Milk</span>
                              <span>• Sweet: {i.customization.sweetness}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="space-y-1 font-bold text-[10px] border-b border-stone-300 pb-3">
                      <div className="flex justify-between font-normal text-zinc-400">
                        <span>SUBTOTAL:</span>
                        <span>${placedOrderDetails.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-normal text-zinc-400">
                        <span>TAX (8.0%):</span>
                        <span>${placedOrderDetails.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xs pt-1 border-t border-stone-300/50">
                        <span>TOTAL AMOUNT:</span>
                        <span className="text-[#6F4E37]">${placedOrderDetails.total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Checkout note */}
                    {placedOrderDetails.notes && (
                      <div className="text-[10px] bg-[#FFFFFF] p-2 border border-stone-200 uppercase">
                        <span className="text-[9px] text-zinc-400 font-bold block mb-0.5">NOTES:</span>
                        <p className="font-mono text-zinc-600 font-medium">{placedOrderDetails.notes}</p>
                      </div>
                    )}

                    {/* Barcode representation */}
                    <div className="pt-4 flex flex-col items-center space-y-1.5 select-none">
                      <span className="text-[9px] text-zinc-400 tracking-widest font-mono">
                        QUEUE SYSTEM INITIATED
                      </span>
                      {/* Barcode lines */}
                      <div className="flex items-stretch justify-center h-8 w-full px-8">
                        {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2, 3, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4].map((w, idx) => (
                          <div
                            key={idx}
                            className="bg-[#111111] mx-[0.5px]"
                            style={{ width: `${w * 1.5}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-[8px] text-zinc-500 font-bold">
                        EST. RUN TIME: {placedOrderDetails.prepTime}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={closeReceipt}
                    className="w-full py-4 bg-[#111111] text-[#FFFFFF] font-sans text-xs tracking-widest uppercase font-semibold hover:bg-[#6F4E37] transition-all duration-300 rounded-none cursor-pointer text-center"
                  >
                    Confirm & Return
                  </button>
                </motion.div>
              ) : cart.length === 0 ? (
                /* EMPTY STATE */
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="p-4 bg-[#F8F6F2] rounded-full text-zinc-300">
                    <Coffee className="w-10 h-10 stroke-[1]" />
                  </div>
                  <h4 className="font-serif text-lg text-zinc-800 font-light">
                    Your bag is completely dry.
                  </h4>
                  <p className="font-sans text-xs text-zinc-400 max-w-xs font-light">
                    Choose from our selection of premium single-origin pour overs, standard espresso extractions, and light pastries to start your order.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 border border-[#111111] text-[#111111] font-sans text-[10px] tracking-widest uppercase font-medium hover:bg-[#111111] hover:text-[#FFFFFF] transition-all duration-300"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                /* SHOPPING CART WITH CUSTOM FORM */
                <div className="space-y-6">
                  {/* Cart items list */}
                  <div className="space-y-4 divide-y divide-[#EAEAEA] max-h-[300px] overflow-y-auto pr-1">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className={`flex gap-4 pt-4 ${index === 0 ? "pt-0 border-t-0" : ""}`}
                      >
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-16 h-16 object-cover border border-[#EAEAEA] bg-stone-50"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <h5 className="font-sans text-xs font-semibold text-[#111111] truncate">
                              {item.menuItem.name}
                            </h5>
                            <span className="font-sans text-xs font-medium text-[#111111] pl-2">
                              ${(item.menuItem.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          {/* Customization values display */}
                          {item.customization && (
                            <p className="font-sans text-[10px] text-zinc-400 mt-1 leading-tight">
                              Milk: {item.customization.milk} | Sweet: {item.customization.sweetness} | Temp: {item.customization.temperature}
                            </p>
                          )}

                          {/* Quantity control */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-[#EAEAEA] overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 px-2 text-zinc-500 hover:bg-[#F8F6F2] hover:text-zinc-800 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 font-mono text-xs text-[#111111] select-none font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 px-2 text-zinc-500 hover:bg-[#F8F6F2] hover:text-zinc-800 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-zinc-400 hover:text-rose-500 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ordering System Form */}
                  <form onSubmit={handleCheckout} className="border-t border-[#EAEAEA] pt-6 space-y-4">
                    <h5 className="font-serif text-sm font-medium text-[#111111] uppercase tracking-wider">
                      Fulfillment Logistics
                    </h5>

                    {/* Order Type Tabs */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-[#F8F6F2] border border-[#EAEAEA]">
                      <button
                        type="button"
                        onClick={() => setOrderType("pickup")}
                        className={`py-2 text-[10px] tracking-widest font-sans uppercase font-medium transition-colors ${
                          orderType === "pickup"
                            ? "bg-[#FFFFFF] text-[#6F4E37] shadow-xs font-semibold"
                            : "text-zinc-400 hover:text-zinc-700"
                        }`}
                      >
                        Store Pickup
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType("dinein")}
                        className={`py-2 text-[10px] tracking-widest font-sans uppercase font-medium transition-colors ${
                          orderType === "dinein"
                            ? "bg-[#FFFFFF] text-[#6F4E37] shadow-xs font-semibold"
                            : "text-zinc-400 hover:text-zinc-700"
                        }`}
                      >
                        Dine-In Table
                      </button>
                    </div>

                    {/* Input Columns */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Julian Brooks"
                          className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                        />
                      </div>

                      {orderType === "pickup" ? (
                        <div>
                          <label className="block text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="+1 (555) 019-2831"
                            className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                            Table Number *
                          </label>
                          <input
                            type="text"
                            required
                            value={tableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            placeholder="e.g. Table 04"
                            className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[9px] font-sans tracking-widest text-[#111111]/30 uppercase font-bold mb-1">
                          Specific Notes (Optional)
                        </label>
                        <textarea
                          value={customNotes}
                          onChange={(e) => setCustomNotes(e.target.value)}
                          placeholder="e.g. Extra hot milk, double shot split, leave cream on side..."
                          rows={2}
                          className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Order summary calculations */}
                    <div className="bg-[#F8F6F2] p-4 border border-[#EAEAEA] space-y-2 mt-2">
                      <div className="flex justify-between font-sans text-xs">
                        <span className="text-zinc-400 font-light">Subtotal</span>
                        <span className="text-[#111111] font-semibold">${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-sans text-xs">
                        <span className="text-zinc-400 font-light">Sales Gov Tax (8.0%)</span>
                        <span className="text-[#111111] font-semibold">${(cartTotal * 0.08).toFixed(2)}</span>
                      </div>
                      <div className="w-full h-[1px] bg-[#EAEAEA] my-1" />
                      <div className="flex justify-between font-sans text-xs font-bold">
                        <span className="text-[#111111] uppercase tracking-wider">Estimated Total</span>
                        <span className="text-[#6F4E37]">${(cartTotal * 1.08).toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#111111] text-[#FFFFFF] font-sans text-xs tracking-widest uppercase font-semibold hover:bg-[#6F4E37] transition-all duration-300 rounded-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer mt-4"
                    >
                      <Coffee className="w-4 h-4 stroke-[1.2]" />
                      <span>Place Order & Print Receipt</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
