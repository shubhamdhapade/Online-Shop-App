import { Minus, Plus, IndianRupee} from "lucide-react";
import { CartContext } from "../store/shopping-cart-context";
import { useContext,  use} from "react";
export default function Cart() {
    const cartContext = useContext(CartContext); //use(CartContext);
    const {updatedCartItemQuantity} = useContext(CartContext);
    const totalPrice = cartContext?.items?.reduce((amount, item) => amount + item?.price * item?.quantity, 0);
    const formattedTotalPrice = `${totalPrice?.toFixed(2)}`;
    const buttonClass = "bg-stone-300 border-none rounded-[5px] text-[#201e1a] cursor-pointer text-[1.1rem] hover:bg-[#f5b744] px-2";

    return (
        <>
            <div
                className="cart"
            >
                {cartContext?.items?.length === 0 && <p>Your cart is empty.</p>}
                {cartContext?.items?.length > 0 && (
                    <ul
                        className="flex flex-col list-none gap-2 p-0 my-4"
                    >
                        { cartContext?.items?.length > 0 && (
                            <ul className="list-none my-4 p-0 flex flex-col gap-2">
                                {cartContext?.items.map((item) => {
                                    const formattedPrice = ` ${item?.price?.toFixed(2)}`;
                                    return (
                                        <li key={`cart-item-${item?.id}`}
                                            className="flex justify-between items-center py-2 px-4 bg-[#fbd392] rounded-[5px] text-[0.5]"
                                        >
                                            <div>
                                                <span>{item?.name}</span>
                                                <span className="flex items-center text-base">
                                                     (<IndianRupee className="w-3 h-4" /> {formattedPrice})
                                                </span>
                                            </div>
                                            <div className="text-base flex gap-2 items-center">
                                                <button 
                                                    className={`${buttonClass} pb-[0.2rem]`}
                                                    onClick={() => updatedCartItemQuantity(item?.id, -1)}>
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span>{item?.quantity}</span>
                                                <button 
                                                    className={`${buttonClass}`}
                                                    onClick={() => updatedCartItemQuantity(item?.id, 1)}>
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </ul>
                )}
                <p className="text-right flex justify-end items-center gap-1 text-lg">
                    Cart Total:  <IndianRupee className="w-4 h-4" />  <strong> {formattedTotalPrice}</strong>
                </p>
            </div>
        </>
    );
};