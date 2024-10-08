import {AxiosRequestConfig} from "axios";

export const Categories: AxiosRequestConfig = {
    method: 'GET',
    url: 'category/all'
}

export const Flash_Sales: AxiosRequestConfig = {
    method: 'GET',
    url: 'product/flash-sell'
}