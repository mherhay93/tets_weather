export const weatherActions = {
    GET_WEATHER: 'GET_WEATHER',
    GET_WEATHER_ITEM: 'GET_WEATHER_ITEM',

    getWeatherAction: (data?: string) => (
        {
            type: weatherActions.GET_WEATHER,
            data
        }
    ),

    getWeatherItemAction: (data?: string) => (
        {
            type: weatherActions.GET_WEATHER_ITEM,
            data
        }
    )
}