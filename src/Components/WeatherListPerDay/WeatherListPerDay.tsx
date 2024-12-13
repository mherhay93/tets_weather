import {FC} from 'react';
import {useSelector} from "react-redux";
import {selectWeatherItemPerDay} from "../../redux/weather/selectors.ts";
import PerDayItem from "./PerDayItem.tsx";

const WeatherListPerDay: FC = () => {
    const listPerDay = useSelector(selectWeatherItemPerDay)

    const list = Object.keys(listPerDay)

    return (
        <PerDayContainer>
            {list.map((item, ind) => <PerDayItem key={`${ind}-${item}`} item={item} />)}
        </PerDayContainer>
    )
}

import {PerDayContainer} from "./WeatherItemPearDayStyle.ts";

export default WeatherListPerDay;