import styles from './App.module.css';
import './css/basic.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Table from './tableBox/table.js';
import DetailView from './tableBox/detailView.js';
import Form from './tableBox/form.js';
import React, {useEffect }  from 'react';
import axios from 'axios';

let listData = [
  {
    num : '3',
    title: '리액트 아자아자',
    regId : '고영승',
    regDate : '2023.08.01',
    content : '리액트트트트트트트트트트트틑트트트트트트트트트트트트틑트트트트트트트트트트트트틑트',
    file : 'FILE_ID1111111111111'
  },
  { 
    num : '2',
    title: '오픈노트 리액트 스터디',
    regId : '오픈노트',
    regDate : '2023.08.05',
    content : '스터디',
    file : 'FILE_ID2222222222222'
  },
  {
    num : '1',
    title: '이동통신사 긴급 처리건',
    regId : '이통사',
    regDate : '2023.08.21',
    content : '긴급오류 수정해주세요',
    file : ''
  }
];

function App() {
  return (
  <div className={styles.tableBox}>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Table listData={listData}/>}></Route>
        <Route path={"/detailView.do"} element={<DetailView listData={listData}/>}></Route>
        <Route path={"/form.do"} element={<Form listData={listData}/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
