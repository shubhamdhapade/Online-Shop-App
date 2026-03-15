import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({children, onReset}, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            showModal(){
                dialog.current.showModal();
            },
            close(){
                if (dialog.current && dialog.current.open) {
                    dialog.current.close();
                }
            }
        }
    });
    return createPortal(
        <dialog 
            className="w-[95%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-[500px] bg-[#d3b17b] shadow-2xl rounded-xl m-auto p-4 md:p-6 backdrop:bg-black/65 open:animate-slide-in [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#edbf68] [&::-webkit-scrollbar-thumb]:rounded-full" 
            ref={dialog} 
            onClose={onReset}>
            {children}
        </dialog>,
        document.getElementById("modal-root")
    );
});
export default Modal;