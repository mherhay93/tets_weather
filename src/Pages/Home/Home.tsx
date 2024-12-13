import {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {weatherActions} from "../../redux/weather/actions.ts";
import {HomeMain, HomeWrapper} from "./homeStyle.ts";
import Header from "../../Components/Header/Header.tsx";
import Main from "../../Components/Main/Main.tsx";
import WeatherListPerDay from "../../Components/WeatherListPerDay/WeatherListPerDay.tsx";

const Home: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(weatherActions.getWeatherAction())
        dispatch(weatherActions.getWeatherItemAction())
    }, []);

    return (
        <HomeWrapper>
            <Header />
            <HomeMain>
                <Main />
            </HomeMain>
            <WeatherListPerDay />
        </HomeWrapper>
    )
}

export default Home;