import axios, {AxiosResponse} from 'axios';
import {API_URL} from "./configs.ts";


const instance = axios.create({
    baseURL: API_URL,
});

export const apiRequest = (config: Record<string, string>): Promise<void | AxiosResponse> => {
    const { params, ...rest } = config;

    const conf = {
        ...rest,
        params,
    };

    return instance(conf)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log('error ========', error)
        });
};