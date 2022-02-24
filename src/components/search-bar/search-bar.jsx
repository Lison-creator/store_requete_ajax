import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import style from "./search-bar.module.css"


const SearchBar = (props) => {
    const { submitName } = props;
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    /* On récupère les données envoyées par l'utilisateurice. Ensuite on pourra utilisé le hook de useForm "handleSubmit", qui récupère le submit et fait en plus le "e.preventdefault" */
    const handleSearch = (data) => {
        console.log(data);
        props.onResult(data.content); /* On envoi vers son parent */
        reset();
    }

    return (
        <form className={style.formSearchBar} onSubmit={handleSubmit(handleSearch)}>
            {/* "...register" lien entre le state et l'html. Il créer automatiquement un state du nom de "content" qui changera selon l'input. On peut lui passer des paramètres comme "required" pour rendre le champ obligatoire */}
            <input type="text" {...register("content", { required: true })} />
            <button className={style.button} type="submit">{submitName}</button>
            {/* On gère l'erreur s'il y a un problème */}
            {errors.content && <p className={style.erreur}>Votre recherche est vide</p>}
        </form>
    )
}

/* Pour que le texte du bouton soit modifiable, on créer un props */

SearchBar.defaultProps = {
    submitName: "Rechercher",
    onResult: () => { } /* NOOP */
}
SearchBar.propTypes = {
    submitName: PropTypes.string,
    onResult: PropTypes.func /* Permet de récupérer le props et de l'envoyer vers son parent */
}



export default SearchBar;