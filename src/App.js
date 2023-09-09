import styles from './App.module.css';
import './css/basic.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Table from './tableBox/table.js';
import DetailView from './tableBox/detailView.js';
import Form from './tableBox/form.js';
import React, {useState, useEffect }  from 'react';
import axios from 'axios';

function App() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
        setDatas(null);
        const response = await axios.get(
          '/api/test'
        );
        setDatas(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
if(datas)
  return (
  <div className={styles.tableBox}>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Table listData={datas}/>}></Route>
        <Route path={"/detailView.do"} element={<DetailView listData={datas}/>}></Route>
        <Route path={"/form.do"} element={<Form listData={datas}/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
