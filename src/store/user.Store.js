import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserStore {
  userInfo = {name:'',password:''}
  constructor() {
    makeAutoObservable(this)
  }
  getUserInfo = async () => {
    // 调用接口获取数据
    // const res = await http.get('/user/profile')
    this.userInfo.name = "Mr Zeng"
  }
}

export default UserStore