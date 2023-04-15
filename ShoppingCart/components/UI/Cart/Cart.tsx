import {useContext} from "react";
import {ShoppingCartContext} from "@/ShoppingCart/contexts/ShoppingCartContext";
import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";

export const Cart = () => {

    const {state, dispatch} = useContext(ShoppingCartContext)

    const handleRemove = (id: number) => {
        dispatch({type: 'delete', id})
    }

    const handleRemoveAll = () => {
        dispatch({type: 'deleteAll'})
    }

    const handleChangeCount = (id: number, count: number, add: number) => {
        dispatch({type: 'changeCount', id, count: count+add})
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={handleRemoveAll}>Remove All</button>
            {
                state.items.sort((i: ShopItem, j: ShopItem) => i.id - j.id).map((i: ShopItem) => <div key={i.id}>
                    <span>{i.name} - {i.count}</span>
                    <span>
                        <button onClick={() => handleChangeCount(i.id, i.count, -1)} disabled={i.count === 1}>-</button>
                        <button onClick={() => handleChangeCount(i.id, i.count, 1)}>+</button>
                    </span>
                    <span>
                        <button onClick={() => handleRemove(i.id)}>Remove</button>
                    </span>
                </div>)
            }
        </div>
    )
}