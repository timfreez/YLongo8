import { Layout, Menu, Popconfirm  } from 'antd'
import {Outlet,Link,useLocation,useNavigate} from 'react-router-dom'
import {useStore} from "@/store";
import {observer} from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
    AppstoreOutlined,
} from '@ant-design/icons'

import './index.scss'
import {useEffect} from "react";

const { Header, Sider } = Layout
const { SubMenu } = Menu;

const MainLayout = () => {
    const {pathname} = useLocation()
    const {userStore,loginStore} = useStore()
    const navigate = useNavigate()
    useEffect(() => {
        userStore.getUserInfo()
    }, [userStore])
    // console.log(userStore)
    const  onConfirm=()=>{
        loginStore.loginOut()
        navigate('/login')
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo"><h2 style={{  color: 'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;国家电网</h2></div>
                <div className="user-info">
                    <span className="user-name" >{userStore.userInfo.name}</span>
                    <span className="user-logout">
            <Popconfirm  onConfirm={onConfirm}
                title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
                </div>

            </Header>
            <div style={{height:"auto"}}>
                <Menu theme='dark' mode='horizontal' style={{height:35}}>
                    <SubMenu style={{fontSize:20}} key="/5"   title='菜单一'>
                            <Menu.Item key="app" icon={<AppstoreOutlined />}>
                               标题一
                            </Menu.Item>
                            <Menu.Item key="disabled" icon={<AppstoreOutlined />}>
                                标题二
                            </Menu.Item>
                    </SubMenu>
                    <SubMenu style={{fontSize:20}} key="/1"   title='菜单二'>
                        <Menu.Item key="ajj" icon={<AppstoreOutlined />}>
                            标题一
                        </Menu.Item>
                        <Menu.Item key="aoo" icon={<AppstoreOutlined />}>
                            标题二
                        </Menu.Item>

                    </SubMenu>
                </Menu>
            </div>

            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"

                        defaultSelectedKeys={[pathname]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu icon={<HomeOutlined />}  title="运方" key="1">
                            <Menu.Item key="/main" ><Link to='/main'>&nbsp;&nbsp;&nbsp;月报查看</Link></Menu.Item>
                            <Menu.Item key="/a" ><Link to='/luckysheet'>&nbsp;&nbsp;&nbsp;网损填报</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu icon={<DiffOutlined />} title="其他" key="2">
                            <Menu.Item key="/article" ><Link to='/main/article'>&nbsp;&nbsp;&nbsp;内容管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu icon={<EditOutlined />} title="subnav 3" key="3">
                            <Menu.Item key="/publish" ><Link to='/main/publish'>&nbsp;&nbsp;&nbsp;模板制作</Link></Menu.Item>
                        </SubMenu>
                        {/*<SubMenu key="sub1" icon={<UserOutlined />} title="运方" style={{backgroundColor:'#bce672'}}>*/}
                        {/*    <Menu.Item key="1" >月报查看</Menu.Item>*/}
                        {/*    <Menu.Item key="2" >网损填报</Menu.Item>*/}
                        {/*    <Menu.Item key="3" >模板制作</Menu.Item>*/}
                        {/*    <Menu.Item key="4" >option4</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub2" icon={<LaptopOutlined />} title="其他" style={{backgroundColor:'#bce672'}}>*/}
                        {/*    <Menu.Item key="5">option5</Menu.Item>*/}
                        {/*    <Menu.Item key="6">option6</Menu.Item>*/}
                        {/*    <Menu.Item key="7">option7</Menu.Item>*/}
                        {/*    <Menu.Item key="8">option8</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3" style={{backgroundColor:'#bce672'}}>*/}
                        {/*    <Menu.Item key="9">option9</Menu.Item>*/}
                        {/*    <Menu.Item key="10">option10</Menu.Item>*/}
                        {/*    <Menu.Item key="11">option11</Menu.Item>*/}
                        {/*    <Menu.Item key="12">option12</Menu.Item>*/}
                        {/*</SubMenu>*/}
                    </Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                     <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default observer(MainLayout)