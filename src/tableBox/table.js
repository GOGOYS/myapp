import file_zip from '../images/icon/file_zip.png';
import { useNavigate } from "react-router-dom";
import styles from '../App.module.css'

const width7 = {
    width : "7%"
}
const width10 = {
    width : "10%"
}


function Content({listData}){
    const movePage = useNavigate();

    const goDetailView = (num) => {
        //함수에 인자 넘기기
        movePage('/detailView.do?num='+num+'');
    }
    return (
        <tr onClick={() => goDetailView(listData.num)}>
            <td>{listData.num}</td>
            <td className="l"><p className="ellipsis">{listData.title}</p></td>
            <td><img src={file_zip} alt="zip"/></td>
            <td>{listData.regDate}</td>
            <td>78</td>
        </tr>
    )
}

function Table({listData}) {
    const movePage = useNavigate();

    function goForm(){
        movePage('/form.do');
    }

    const listSize = listData.length;

    
    return (
    <div>   
        <h1 className={styles.title}>게시판 연습</h1>
        <div className="tbl_top">
            <div className="tbl_left">
                <div className="all_num"><i className="xi-paper-o"></i>전체<span className="num">{listSize}</span>건</div>
            </div>
            <div className="tbl_right">
                <select>
                    <option value="10">10건</option>
                    <option value="20">20건</option>
                    <option value="30">30건</option>
                    <option value="50">50건</option>
                </select>
            </div>
        </div>
        <table className="tbl col link board">
            <colgroup>
                <col style={width7}/>
                <col/>
                <col style={width7}/>
                <col style={width10}/>
                <col style={width7}/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">첨부파일</th>
                    <th scope="col">등록일</th>
                    <th scope="col">조회수</th>
                </tr>
            </thead>
            <tbody>
                {
                    listData.map((listData,index) => (<Content listData={listData} key={index} />)) 
                }
            </tbody>
        </table>
        <div class="btn_area">
            <button type="button" class="btn blue" onClick={goForm}>등록</button>
        </div>
    </div>
    )
}

export default Table;