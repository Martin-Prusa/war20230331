import {ShopItem} from "@/ShoppingCart/interfaces/ShopItem";
import {act} from "react-dom/test-utils";

type CartStateType = {
    items: ShopItem[]
}

type CartActionType =
    | {type: 'add'; item: ShopItem}
    | {type: 'delete', id: number}
    | {type: 'deleteAll'}
    | {type: 'changeCount', id: number, count: number};

export const cartReducer = (state: CartStateType, action: CartActionType): CartStateType => {
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
        case "changeCount":
            const itm = state.items.find(x => x.id === action.id)
            console.log(itm)
            if(itm) {
                return {
                    items: [
                        ...state.items.filter(x => x.id !== action.id),
                        {
                            id: itm.id,
                            name: itm.name,
                            count: action.count,
                            type: itm.type
                        }
                    ]
                }
            }
            return {items: state.items}
        default:
            throw new Error("Unexpected Action")
    }
}