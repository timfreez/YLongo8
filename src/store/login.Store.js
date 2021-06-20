// login module
import { makeAutoObservable } from 'mobx'
import { http ,encrypt,setToken,getToken,removeToken} from '@/utils'
class LoginStore {
  token = getToken()||'';
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }
  getToken = async ({ username, password }) => {
    const userName = username;
    // 调用登录接口
    const res = await http.post('/user/getPublicKey', {
      userName
    })
    console.log(res)
    const cipherText =encrypt(password,res.publicKey);
    const response= await http.post('http://localhost:8081/user/doLogin', {
      userName, cipherText
    })
    console.log(response.data.tokenValue)
    // // // 存入token
    // this.token = response.data.token
    this.token =response.data.tokenValue
    // 存入ls
    setToken(this.token)
  }
  退出登录
  loginOut = () => {
    this.token = ''
    removeToken()
  }
}

export default LoginStore