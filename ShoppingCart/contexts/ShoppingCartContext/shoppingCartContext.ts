import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";
import {createContext} from "react";

type ShoppingCartContextType = {
    state: any
    dispatch: any
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
    state: [],
    dispatch: () => {}
})