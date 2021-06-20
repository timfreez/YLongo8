import {unstable_HistoryRouter as HistoryRouter,Routes,Route} from 'react-router-dom'
import {history} from "@/utils/history";
import Login from "@/pages/Login";
import Auth from "@/components/Auth";
import MainLayout from "@/pages/MainLayout";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import './App.css';
import Luckysheet from "@/pages/Luckysheet";
function App() {
  return (
      <HistoryRouter history={history}>
                    <div className="App">
                                  <Routes>
                                      {/*一级路由*/}
                                      <Route path='/main' element={
                                          <Auth>
                                              <MainLayout/>
                                          </Auth>
                                      }>
                                          {/*二级路由*/}
                                           <Route index element={<Home />}></Route>
                                           <Route path='article' element={<Article />}></Route>
                                           <Route path='publish' element={<Publish />}></Route>
                                      </Route>
                                      <Route path='/' element={<Login />}></Route>
                                      <Route path='/luckysheet' element={<Auth><Luckysheet /></Auth>}></Route>
                                      <Route path='/*' element={<Auth></Auth>}></Route>
                                  </Routes>

                    </div>
      </HistoryRouter>
  );
}

export default App;
