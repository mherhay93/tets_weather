import {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IPropsPerDayItem} from './types';
import {PerDayItemWrapper} from "./WeatherItemPearDayStyle.ts";
import {weatherReducers} from "../../redux/weather/slice.ts";
import {selectUI, selectWeatherItemPerDay} from "../../redux/weather/selectors.ts";

const PerDayItem: FC<IPropsPerDayItem> = ({item}) => {
    const dispatch = useDispatch()
    const listPerDay = useSelector(selectWeatherItemPerDay)
    const {selectedDay} = useSelector(selectUI)

    const handleClick = () => {
        dispatch(weatherReducers.setUI({selectedDay: item}))
        dispatch(weatherReducers.setWeatherList(listPerDay[item]))
    }
    return (
        <PerDayItemWrapper className={selectedDay === item ? 'active' : ''} onClick={handleClick}>
            <div>{item}</div>
         </PerDayItemWrapper>
    )
}

export default PerDayItem;