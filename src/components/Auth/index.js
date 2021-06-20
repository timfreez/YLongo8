//路由鉴权，判断token是否存在
import {getToken} from "@/utils";
import {Navigate} from 'react-router-dom'

function Auth({children}){
    const existToken = getToken();
    if (existToken){
        return <>{children}</>
    }else{
        return <Navigate to="/" replace/>
    }
}


export default Auth