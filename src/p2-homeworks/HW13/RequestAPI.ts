import axios, {AxiosResponse} from "axios";


export const requestAPI = {
    getData(success: boolean) {
        return axios.post<boolean, AxiosResponse<ResponseData_T>>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}


type ResponseData_T = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
}



// https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true}