import PriceDisplay from "../../components/price-display/price-display";
import style from "./product-list.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../../store/actions/product-action";


/* On peut coder l'item de la liste ici car il ne sera utilisé que dans le composant ProductList */

/* Fonction lambda: une fonction qui renvoi directement un "return" */
const ProductListItem = (props) => (

    <li className={style.product} onClick={() => props.onSelected(props.id)}>
        <p>{props.name}</p>
        <p><PriceDisplay value={props.price} /> </p>
    </li>
);

const ProductList = () => {

    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();

    const productJsx = products.map(
        item => <ProductListItem {...item}
            key={item.id}
            onSelected={(id) => dispatch(selectProduct(id))} />
    )

    return (
        <div className={style.containerList}>
            <h2>Liste des animaux</h2>
            <ul className={style.productList}>
                {productJsx}
            </ul>
        </div>

    );
}

export default ProductList;