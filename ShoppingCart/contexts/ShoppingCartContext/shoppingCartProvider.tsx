import {ReactNode, useReducer} from "react";
import {cartReducer} from "@/ShoppingCart/reducers/ShoppingCart";
import {ShoppingCartContext} from "./shoppingCartContext";

export function ShoppingCartProvider({children}: {children:ReactNode}) {
    const [state, dispatch] = useReducer(cartReducer, {items: []})

    return (
        <ShoppingCartContext.Provider value={{state, dispatch}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}