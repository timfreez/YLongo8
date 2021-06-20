import {Card, Checkbox, Input,Form,Button,message} from 'antd'
import {useNavigate} from 'react-router-dom'
import {useStore} from "@/store";
// import logo from '@/assets/logo.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// 导入样式文件
import './index.scss'

function Login () {
    const {loginStore} = useStore();
    const navigate = useNavigate();
     const onFinish = async values => {
        console.log('Received values of form: ', values);
        await loginStore.getToken({
            username: values.username,
            password: values.password
        })
        navigate('main',{replace:true})
        message.success('登录成功')
    };
    return (
        <div className="login">
            <Card className="login-container">
                {/*<img className="login-logo" src={logo} alt="" />*/}
                <h5 className="login-logo" style={{fontSize:40}}>国家电网</h5>
                   <Form initialValues={{ remember: true }}
                                onFinish={onFinish}>
                       <Form.Item name="username"
                                  rules={[{ required: true, message: '请输入用户名' }]}>
                           <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                       </Form.Item>
                       <Form.Item  name="password"
                                   rules={[
                                       {
                                       required: true,
                                       message: '请输入密码'
                                       },
                                       // {
                                       //     pattern: /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
                                       //     validateTrigger:'onBlur',
                                       //     message: '密码长度最少8位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
                                       // }
                                   ]}>
                           <Input size="large"  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"/>
                       </Form.Item>
                       <Form.Item name="remember" valuePropName="checked">
                           <Checkbox className="login-checkbox-label">
                                我已阅读并同意条款
                           </Checkbox>
                       </Form.Item>
                       <Form.Item>
                           <Button type="primary" htmlType="submit" size="large" block>登录</Button>
                       </Form.Item>
                   </Form>
            </Card>
        </div>
    )
}

export default Login