import { useDispatch, useSelector } from "react-redux";
import ErrorScreen from "../../components/error-screen/error-screen";
import LoadingScreen from "../../components/loading-screen/loading-screen";
import SearchBar from "../../components/search-bar/search-bar";
import WeatherDisplay from "../../components/weather-result/weather-result";
import { searchWeather } from "../../store/actions/weather-action";

const WeatherContainer = () => {

    /* Lien avec le Store (via les hooks de React-redux) */
    const dispatch = useDispatch();
    const { data, errorMessage, isLoading } = useSelector(state => state.weatherCategory);


    const handleSearch = (city) => {
        /* Envoyer l'action qui permet de faire la requête Ajax */
        dispatch(searchWeather(city));

    }
    return (
        <div>
            <h2>Rechercher la météo</h2>
            <SearchBar onResult={handleSearch} />
            {isLoading ? (
                <LoadingScreen />
            ) : errorMessage ? (
                <ErrorScreen message={errorMessage} />
            ) : data != null && (
                <WeatherDisplay{...data} /> /* ...data = "data = data.name , data.desc etc") */
            )
            }
        </div>
    )
}

export default WeatherContainer;