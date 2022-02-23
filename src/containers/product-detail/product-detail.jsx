import { useSelector } from "react-redux";
import PriceDisplay from "../../components/price-display/price-display";
import style from "./product-detail.module.css"


const ProductDetail = () => {
    const selectedProduct = useSelector(s => s.product.selectedProduct)

    if (selectedProduct === null) {
        return (
            <div>
                <h2>Pas de produit selectionné</h2>
            </div>
        )
    }
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