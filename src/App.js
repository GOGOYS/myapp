import styles from './App.module.css';
import './css/basic.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Table from './tableBox/table.js';
import DetailView from './tableBox/detailView.js';
import Form from './tableBox/form.js';

function App() {
  return (
  <div className={styles.tableBox}>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Table />}></Route>
        <Route path={"/detailView.do"} element={<DetailView />}></Route>
        <Route path={"/form.do"} element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
