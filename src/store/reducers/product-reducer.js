import { PRODUCT_SELECTION } from "../actions/product-action";

const initialProductState = {
    products: [
        {
            id: 1,
            name: "Chat de gouttière",
            price: 4_220,
            description: "Un adorable chat de gouttière",
            /* Dans un server classique, les images osnt stockées dans une db */
            image: "images/chat.jpg"
        },
        {
            id: 2,
            name: "Chat arboricole",
            price: 20_000,
            description: "Ce chat adore grimper aux arbres. Si vous voulez qu'il vous aime, prévoyez des arbres pour ellui.",
            /* Dans un server classique, les images osnt stockées dans une db */
            image: "images/chat-02.jpg"
        },
        {
            id: 3,
            name: "Lynx",
            price: 589_000_000,
            description: "Un lynx. Vous vous sentez capable de vous en occuper ? Vous rêvez...",
            /* Dans un server classique, les images osnt stockées dans une db */
            image: "images/lynx.jpg"
        },
        {
            id: 4,
            name: "Renard",
            price: 60_000,
            description: "Cet animal curieux s'echappera de chez vous à la moindre occasion.",
            /* Dans un server classique, les images osnt stockées dans une db */
            image: "images/renard.jpg"
        }

    ],
    /* Produit selectionné au départ lorsque l'action est appelée. Au départ, il n'y a aucun produit selectionné */
    selectedProduct: null
}

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case PRODUCT_SELECTION:
            return {
                ...state,
                selectedProduct: state.products.find(p => p.id === action.payload)
            };


        default:
            return state;
    }
}