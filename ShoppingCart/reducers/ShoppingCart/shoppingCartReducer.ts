import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";

type CartStateType = {
    items: ShopItem[]
}

type CartActionType =
    | {type: 'add'; name: string, count: number, itemType: string}
    | {type: 'delete', id: number}
    | {type: 'deleteAll'};

export const cartReducer = (state: CartStateType, action: CartActionType): CartStateType => {
    switch (action.type) {
        case 'add':
            return {
                items: [
                    ...state.items,
                    { id: Date.now(), name: action.name, count: action.count, type: action.itemType }
                ]
            }
        case 'delete':
            return {
                items: state.items.filter(i => i.id !== action.id)
            }
        case 'deleteAll':
            return {
                items: []
            }
        default:
            throw new Error("Unexpected Action")
    }
}