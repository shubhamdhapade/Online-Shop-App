import { useRef } from "react";
import CartModal from "./CartModal";
import Checkout from "./Checkout";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export default function Header() {
    const modal = useRef();
    const checkoutModal = useRef();
    const { items } = useContext(CartContext);
    const cartQuantity = items.length;
    function handleOpenCartClick() {
        modal.current.showModal();
    }
    function handleCloseCartClick() {
        modal.current.close();
    }
    function handleCheckoutClick() {
        handleCloseCartClick();
        checkoutModal.current.showModal();
    }
    function handleCheckoutCancel() {
        checkoutModal.current.close();
    }

    const closeButtonCSS = "bg-stone-300 hover:bg-stone-400 px-6 py-2 m-3 border border-[#201e1a] rounded-[5px] text-[#201e1a] text-[1.1rem] cursor-pointer transition-colors";
    let modalActions = <button className={closeButtonCSS} onClick={handleCloseCartClick}>Close</button>;
    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button 
                    className="bg-[#f4B115] hover:bg-[#f5b744] border border-[#201e1a] rounded-[5px] px-6 py-2 text-[#201e1a] text-xl cursor-pointer" 
                    onClick={handleCheckoutClick}
                >
                    Go To Checkout
                </button>
                <button className={closeButtonCSS} onClick={handleCloseCartClick}>Close</button>
            </>
        );
    }
    return (
        <>
            <CartModal
                ref={modal}
                title="Your Cart"
                actions={modalActions}
                onReset={handleCloseCartClick}
            />
            <Checkout ref={checkoutModal} onCancel={handleCheckoutCancel} />
            <header
                className="flex flex-col sm:flex-row justify-between items-center py-6 px-[5%] md:px-[10%] lg:px-[15%] gap-4"
            >
                <div
                    className="flex items-center gap-3 md:gap-6 text-center sm:text-left"
                >
                    <img src="/logo.png" alt="Shop Logo" className="w-12 h-12 md:w-16 md:h-16" />
                    <h1
                        className="uppercase text-[#edbf68] text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-tight"
                    >Elegant Context</h1>
                </div>
                <p>
                    <button
                        className="bg-[#edbf68] hover:bg-[#f5b744] rounded-[5px] px-4 py-2 md:px-6 md:py-3 text-[#201e1a] text-lg md:text-xl flex items-center gap-2 transition-all active:scale-95 shadow-md cursor-pointer"
                        onClick={handleOpenCartClick} >
                        <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="hidden xs:inline">Cart</span>
                        {cartQuantity > 0 && <span className="ml-1">({cartQuantity})</span>}
                    </button>
                </p>
            </header>
        </>
    );
}