import {FC} from 'react';
import {useSelector} from "react-redux";
import {selectWeatherItemData, selectWeatherList} from "../../redux/weather/selectors.ts";
import {convertFToC} from "../../helpers/utils.ts";
import {IMG_URL} from "../../helpers/configs.ts";
import WeatherList from "../WeatherList/WeatherList.tsx";
import {MainWrapper} from "./styleMain.ts";

const Main: FC = () => {
    const listPerDay = useSelector(selectWeatherList)
    const data = listPerDay && listPerDay.length ? listPerDay[0] : null
    const {name, main, weather} = useSelector(selectWeatherItemData)
    const weatherDay = data ? data.weather : weather
    const mainDay = data ? data.main : main
    const celsius = mainDay ? convertFToC(mainDay.temp) : 0;
    const icon = weatherDay && weatherDay[0] ? `${IMG_URL}${weatherDay[0].icon}.png` : null

    return (
        <MainWrapper>
            <div className='weather_container'>
                <div className='city'>{name}</div>
                <div className='deg'>{celsius} C</div>
                {icon ? <img className='img' src={icon} alt='icon'/> : null}
                <div className='description'>{weatherDay && weatherDay[0].description}</div>
            </div>
            <WeatherList/>
        </MainWrapper>
    )
}

export default Main;