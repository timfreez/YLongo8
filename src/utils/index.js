//工具统一管理
import {http} from './http'
import  {encrypt} from './rsaEncrypt';
import { setToken, getToken, removeToken} from './token'
export {
    http,
    encrypt,
    setToken,
    getToken,
    removeToken
}