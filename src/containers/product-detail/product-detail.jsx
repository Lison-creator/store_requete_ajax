import PriceDisplay from "../../components/price-display/price-display";
import style from "./product-detail.module.css"


/* Fausses données pour la maquette */
const selectedProduct = {
    name: "Nom du produit",
    price: 42,
    description: "la description",
    /* Dans un server classique, les images osnt stockées dans une db */
    image: "images/chat.jpg"
}

const ProductDetail = () => {

    return (
        <div className={style.productDetailContainer}>
            <h2>Détail du produit</h2>
            <div>
                <h3>{selectedProduct.name}</h3>
                <p><PriceDisplay value={selectedProduct.price} /></p>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h4>Description du produit :</h4>
                <p>{selectedProduct.description}</p>
            </div>
        </div>
    );

}

export default ProductDetail;