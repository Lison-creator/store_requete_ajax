/* Le composant obtient via les props:
le nom, la température, la description et l'icone */

const WeatherDisplay = ({ name, temp, desc, icon }) => (
    <div>
        <p>Météo de la région de {name}</p>
        <p>Température: {temp} °C</p>
        <img src={icon} alt={desc} />

        <p>{desc}</p>
    </div>
);

export default WeatherDisplay;