import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";

type CartStateType = {
    items: ShopItem[]
}

type CartActionType =
    | {type: 'add'; item: ShopItem}
    | {type: 'delete', id: number}
    | {type: 'deleteAll'};

export const cartReducer = (state: CartStateType, action: CartActionType): CartStateType => {
    console.log("click")
    switch (action.type) {
        case 'add':
            const i = state.items.find(x => x.id === action.item.id)
            if(i) {
                return {
                    items: [
                        ...state.items.filter(x => x.id !== i.id),
                        {
                            id: i.id,
                            name: i.name,
                            count: i.count + 1,
                            type: i.type
                        }
                    ]
                }
            }
            return {
                items: [
                    ...state.items,
                    action.item
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