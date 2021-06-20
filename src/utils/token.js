//封装ls实现token持久化
const key = 'pc-key'

const setToken=(token)=>{
    return window.localStorage.setItem(key,token)
}

const getToken=()=>{
    return window.localStorage.getItem(key)
}

const removeToken=()=>{
    return window.localStorage.removeItem(key)
}
export {
    setToken,
    getToken,
    removeToken
}