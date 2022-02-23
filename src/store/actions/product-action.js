export const PRODUCT_SELECTION = "product/selection";

/* Création de méthode pour générer les objets "action" */

/* Une action est composée d'un type et d'un payload */

export const selectProduct = (id) => ({
    type: PRODUCT_SELECTION,
    payload: id /* élément utile à renvoyer pour l'action */
});