import {useContext} from "react";
import {ShoppingCartContext} from "@/ShoppingCart/contexts/ShoppingCartContext";
import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";

export const Cart = () => {

    const { state, dispatch } = useContext(ShoppingCartContext)

    return (
        <div>
            <h2>Shopping Cart</h2>
            {
                state.items.map((i:ShopItem) => <div key={i.id}>{i.name} - {i.count}</div>)
            }
        </div>
    )
}