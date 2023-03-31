import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";
import {ItemCard} from "@/ShoppingCart/components/UI/ItemCard";

export const ItemsList = () => {
    const items: ShopItem[] = [
        {id: 1, name: 'iPhone 14', type: 'mobile', count: 1},
        {id: 2, name: 'iPhone 13', type: 'mobile', count: 1},
        {id: 3, name: 'iPad Air', type: 'tablet', count: 1},
    ]

    return (
        <>
            {items.map(product => <ItemCard item={product} key={product.id}/>)}
        </>
    )
}