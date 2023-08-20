import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import file_img from '../images/icon/file_img.png';

const width20 = {
    width : "20%"
}
const width30 = {
    width : "30%"
}

function DetailView(){
    const movePage = useNavigate();

    function goTable(){
        movePage('/');
    }

    function goDelete(){
        if(window.confirm('삭제하시겠습니까?')){
            movePage('/');
        }
    }

    function goForm(){
        movePage('/form.do');
    }

    const [countY, setCountY] = useState(0);
    const [countN, setCountN] = useState(0);

    function handleClickY() {
        setCountY(countY + 1);
    }

    function handleClickN() {
        setCountN(countN + 1);
    }
    return(
        <div>
            <ul class="view_top">
                <li><a href="javascript:void(0);" className="i_share">공유</a></li>
                <li><a href="javascript:void(0);" className="i_print">인쇄</a></li>
                <li><a href="javascript:void(0);" className="i_siren">신고</a></li>
            </ul>
            <table class="tbl row board">	
                <colgroup>
                    <col style={width20}/>
                    <col style={width30}/>
                    <col style={width20}/>
                    <col style={width30}/>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">제목</th>
                        <td colspan="3">리액트 공부 아자아자</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td>고영승</td>
                        <th scope="row">작성일</th>
                        <td>2023.08.20</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <br/>
                            리액트 공부 웅장하다
                            <div class="likeit">
                            <span class="like">
                                <input type="radio" name="radio01" id="radio01_1" onClick={handleClickY}/><label for="radio01_1">추천</label>
                                <span class="num">{countY}</span>
                            </span>
                            <span class="dislike">
                                <input type="radio" name="radio01" id="radio01_2" onClick={handleClickN}/><label for="radio01_2">반대</label>
                                <span class="num">{countN}</span>
                            </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">첨부파일</th>
                        <td colspan="3">
                            <ul class="file_li">
                                <li><a href="javascript:void(0);"><img src={file_img} alt=""/>첨부파일</a></li>
                                <li><a href="javascript:void(0);"><img src={file_img} alt=""/>첨부파일</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="btn_area">
                <button type="button" class="btn bd blue" onClick={goForm}>수정</button>
                <button type="button" class="btn bd red" onClick={goDelete}>삭제</button>
                <button type="button" class="btn gray" onClick={goTable}>목록</button>
            </div>
            <table class="tbl row board oth_post">
                <colgroup>
                    <col style={width20}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">이전글<i class="xi-angle-up-thin"></i></th>
                        <td><a href="javascript:void(0);" onClick={goTable} className="ellipsis">이전글</a></td>
                    </tr>
                    <tr>
                        <th scope="row">다음글<i class="xi-angle-down-thin"></i></th>
                        <td><a href="javascript:void(0);" onClick={goTable}  className="ellipsis">다음글</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailView;