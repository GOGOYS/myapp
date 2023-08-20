import file_zip from '../images/icon/file_zip.png';
import { useNavigate } from "react-router-dom";
import styles from '../App.module.css'

const width7 = {
    width : "7%"
}
const width10 = {
    width : "7%"
}

function Table() {
    const movePage = useNavigate();

    function goDetailView(){
        movePage('/detailView.do');
    }
    function goForm(){
        movePage('/form.do');
    }

    
    return (
    <div>   
        <h1 className={styles.title}>게시판 연습</h1>
        <div className="tbl_top">
            <div className="tbl_left">
                <div className="all_num"><i className="xi-paper-o"></i>전체<span className="num">10</span>건</div>
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
                <tr onClick={goDetailView}>
                    <td>공지</td>
                    <td className="l"><p className="ellipsis">리액트 공부공부</p></td>
                    <td><img src={file_zip} alt="zip"/></td>
                    <td>2023.08.20</td>
                    <td>78</td>
                </tr>
                <tr onClick={goDetailView}>
                    <td>3</td>
                    <td class="l"><p className="ellipsis">나만의 비밀글~</p><i className="xi-lock"></i></td>               
                    <td><img src={file_zip} alt="zip"/></td>
                    <td>2023.08.17</td>
                    <td>21</td>
                </tr>
                <tr onClick={goDetailView}>
                    <td>2</td>
                    <td class="l"><p className="ellipsis">리액트란 뭘까 </p></td>               
                    <td><img src={file_zip} alt="zip"/></td>
                    <td>2023.08.11</td>
                    <td>34</td>
                </tr>
                <tr onClick={goDetailView}>
                    <td>1</td>
                    <td class="l"><p className="ellipsis" style={{color:"red"}}>[긴급] 이동통신사 오류 수정해주세요. </p></td>               
                    <td><img src={file_zip} alt="zip"/></td>
                    <td>2023.08.03</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        <div class="btn_area">
            <button type="button" class="btn blue" onClick={goForm}>등록</button>
        </div>
    </div>
    )
}

export default Table;