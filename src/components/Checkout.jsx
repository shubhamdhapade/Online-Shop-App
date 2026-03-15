import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { IndianRupee } from "lucide-react";
import { showToasterMessage } from "../utilities/Toaster";
import Modal from "../utilities/Modal";
export default function Checkout({ onCancel, ref }) {
    const { items } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());
        if (!customerData.email || !customerData.name || !customerData.address || !customerData.city || !customerData.postal) {
            showToasterMessage("Please fill in all required fields.", "error");
            return;
        }
        showToasterMessage("Order placed successfully! Check your email for details.", "success");
        clearCart();
        onCancel();
    };

    const inputClass = "w-full p-2 rounded border border-stone-300 bg-stone-50 focus:outline-none focus:border-[#edbf68]";

    return (
        <Modal ref={ref} onReset={onCancel}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-[#4f3807] border-b pb-1">Shipping Details</h3>
                        <input name="name" type="text" placeholder="Full Name" required className={inputClass} />
                        <input name="email" type="email" placeholder="Email Address" required className={inputClass} />
                        <input name="address" type="text" placeholder="Street Address" required className={inputClass} />
                        <div className="flex gap-2">
                            <input name="city" type="text" placeholder="City" required className={inputClass} />
                            <input name="postal" type="text" placeholder="PIN Code" required className={inputClass} />
                        </div>
                    </div>
                    <div className="bg-stone-100 p-4 rounded-lg shadow-inner">
                        <h3 className="font-bold text-[#4f3807] mb-3">Order Summary</h3>
                        <ul className="text-sm flex flex-col gap-2 max-h-40 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#edbf68] [&::-webkit-scrollbar-thumb]:rounded-full mb-4">
                            {items.map((item) => (
                                <li key={item.id} className="flex justify-between border-b border-stone-200 pb-1">
                                    <span>{item.name} (x{item.quantity})</span>
                                    <span className="flex items-center gap-1">
                                        <IndianRupee className="w-3 h-3" /> {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between font-bold text-lg text-[#4f3807]">
                            <span>Total:</span>
                            <span className="flex items-center gap-1">
                                <IndianRupee className="w-4 h-4" /> {totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 border-t pt-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-stone-300 hover:bg-stone-400 px-6 py-2 m-3 border border-[#201e1a] rounded-[5px] text-[#201e1a] text-[1.1rem] cursor-pointer transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#f4B115] hover:bg-[#f5b744] px-6 py-2 m-3 border border-[#201e1a] rounded-[5px] text-[#201e1a] text-[1.1rem] cursor-pointer"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </Modal>

    );
}