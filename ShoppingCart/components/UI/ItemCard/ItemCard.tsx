import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";
import {useContext} from "react";
import {ShoppingCartContext} from "@/ShoppingCart/contexts/ShoppingCartContext";

export const ItemCard = ({item}: {item: ShopItem}) => {

    const { state, dispatch } = useContext(ShoppingCartContext)

    const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
        dispatch({type: 'add', item})
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <ul>
                <li>{item.type}</li>
            </ul>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    )
}