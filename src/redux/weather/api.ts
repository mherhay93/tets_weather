import {apiRequest} from "../../helpers/apiCalls.ts";

export const getWeatherItem = (city: string = 'Ереван', appid: string = 'afd0cbf0c7aaa15b517199c4fa80f9da') => {
    const url = `data/2.5/weather?q=${city}&appid=${appid}`;
    const config = {
        method: 'get',
        url   : url,
    };
    return apiRequest(config);
};

export const getWeather = (city: string = 'Ереван', appid: string = 'afd0cbf0c7aaa15b517199c4fa80f9da') => {
    const url = `data/2.5/forecast?q=${city}&appid=${appid}`;
    const config = {
        method: 'get',
        url   : url,
    };
    return apiRequest(config);
};
