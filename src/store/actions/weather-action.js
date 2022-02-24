import axios from "axios";

/* On créer une action pour prévenir l'utilisateurice du chargement de ses données en cours */
export const WEATHER_LOADING = "weather/loading";

/* Une action pour transmettre le résultat de la requête */
export const WEATHER_RESULT = "weather/result";

/* Une action pour les erreurs potentielles */
export const WEATHER_ERROR = "weather/error";

/* Méthode pour créer des objets actions */
export const loadingWeather = () => ({
    type: WEATHER_LOADING
});

export const errorMessage = (msg) => ({
    type: WEATHER_ERROR,
    payload: msg
});

/* On récupère ce dont on a besoin dans le résultat  */
export const resultWeather = (result) => ({
    type: WEATHER_RESULT,
    payload: {
        name: result.name,
        temp: result.main.temp, /* On doit aller voir comment l'objet de l'api est construit pour connaitre ces champs */
        desc: result.weather[0].description, /* Ici il y a dans l'API un tableau à l'intérieur de "Weather", donc on doit indiquer son index */
        icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
        /* https://openweathermap.org/weather-conditions */
    }
});

/* Méthode pour rechercher la météo via axios (nécessite Redux-thunk) */

export const searchWeather = (city) => {

    /* Envoie d'une fonction qui sera traitée via Redux-Thunk */
    return (dispatch) => {

        /* Le dispatch est une variable qui permet à Redux-thunk de déclencher des actions */

        /* Test de garde / Ceinture de sécurité */
        if (!city) {
            return dispatch(errorMessage("Ville non définie !"));
            return;
        }

        /* On déclenche l'action "loading" */
        dispatch(loadingWeather());


        axios.get("https://openweathermap.org/data/2.5/weather", {
            q: city,
            appid: 'c3fa448b20d4333b499f552522c429d3',
            units: 'metric',
            lang: 'fr'

        }).then(response => {
            /* On déclenche l'action result */
            dispatch(resultWeather(response.data));
        }).catch(error => {
            const errorMessage = (error.response && error.response.status === 404) ?
                "Ville non trouvée" : "La requête a échoué";
            /* On déclenche l'action "error" */
            dispatch(errorMessage(errorMessage));

        })

    }
}