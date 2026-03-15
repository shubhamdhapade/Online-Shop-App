import { ShoppingCart } from "lucide-react";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
export default function Product({
    id, image, title, price, description
}) {
    const { addItemToCart } = useContext(CartContext);
    return (
        <article className="h-full flex-1 bg-[#5f4e33] rounded-xl flex flex-col shadow-md">
            <img className="w-full h-64 object-cover rounded-t-xl" src={image} alt={title} />
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#fbd392] mb-2">{title}</h3>
                    <p className="text-[#d1b68b]">{description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg text-[#fbd392]">₹{price}</p>
                    <button
                        className="bg-[#f4B115] hover:bg-[#f5b744] transition-colors rounded-md px-4 py-2 text-[#201e1a] text-sm font-medium flex items-center gap-2 cursor-pointer"
                        onClick={() => addItemToCart(id)}
                    >
                        Add to Cart <ShoppingCart className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </article>
    );
};