import Modal from "../utilities/Modal";
import Cart from "./Cart";
export default function CartModal({title, actions, ref, onReset }) {
    return (
        <Modal ref={ref} onReset={onReset}>
            <h2
                className="text-2xl uppercase text-[#4f3807] m-0 text-center mb-4">{
                title}
            </h2>
            <Cart/>
            <form
                method="dialog"
                className="flex gap-4 justify-end items-center">
                {actions}
            </form>
        </Modal>
    );
}