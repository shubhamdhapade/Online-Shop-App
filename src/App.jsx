import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { dummyProducts } from "./assets/dummy-product";
import { CartContextProvider } from "./store/shopping-cart-context";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";

export default function App() {
  
  return (
    <CartContextProvider>
      <ToastContainer />
      <Header/>
      <Shop>
        {dummyProducts.map((product) => (
          <li key={`shop-${product.id}`}>
            <Product
              {...product}
            />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  )
}