import {FC} from 'react';
import {useSelector} from "react-redux";
import {selectWeatherList} from "../../redux/weather/selectors.ts";
import {WeatherListWrapper} from "./styleWeaterList.ts";
import ListItem from "./ListItem/ListItem.tsx";

const WeatherList: FC = () => {
    const weatherList = useSelector(selectWeatherList)
    if (!weatherList.length) return <div>NO DATA</div>

    return (
        <WeatherListWrapper>
            {weatherList && weatherList.map(item => <ListItem item={item} key={item.dt_txt} />)}
        </WeatherListWrapper>
    )
}

export default WeatherList;