import { useNavigate } from "react-router-dom";
import file_hwp from '../images/icon/file_hwp.png';

const width20 = {
    width : "20%"
}
const width10 = {
    width : "10%"
}
const width15 = {
    width : "15%"
}
function Form(){
    const movePage = useNavigate();

    function goTables(){
        movePage('/');
    }

    function goInsert(){
        alert('등록되었습니다');
        movePage('/');
    }

    return (
        <div>
            <div class="tbl_top">
                <div class="tbl_left"></div>
                <div class="tbl_right">
                    <span class="asterisk">*</span>필수입력
                </div>
                </div>
                <table class="tbl row board">
                <colgroup>
                    <col style={width20}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                    <th scope="row"><span class="asterisk">*</span>제목</th>
                    <td><input type="text"/></td>
                    </tr>
                    <tr>
                    <th scope="row"><span class="asterisk">*</span>내용</th>
                    <td><textarea rows="5" placeholder="0자 이내"></textarea></td>
                    </tr>
                    <tr>
                    <th scope="row">첨부파일</th>
                    <td>
                        <div class="file_wrap">
                        <button type="button" class="btn bd blue btn_file"><span class="fa_check">파일선택</span></button>
                        <button type="button" class="btn bd red btn_fileDel"><span class="fa_remove">파일삭제</span></button>
                        <span class="pad_l5">파일은 최대 5개까지 첨부 가능합니다. (개별 용량 10MB)</span>
                        <table class="tbl col tbl_file">
                            <caption>첨부파일 업로드 목록</caption>
                            <colgroup>
                                <col style={width10}/>
                                <col />
                                <col style={width15}/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <span class="chk">
                                        <span class="cbx no_txt"><input type="checkbox" name="selectFile" id="allFile" title="전체선택"/><label for="allFile"></label></span>
                                        </span>
                                    </th>
                                    <th scope="col">첨부파일명</th>
                                    <th scope="col">용량</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="chk">
                                        <span class="cbx no_txt"><input type="checkbox" name="file" id="file01"/><label for="file01"></label></span>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="file_tit">
                                            <label for="file1"><span><img src={file_hwp}/></span>첨부파일1</label>
                                        </div>
                                    </td>
                                    <td>4.43MB</td>
                                </tr>
                                <tr>
                                    <td colspan="3"> 첨부파일이 없습니다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="file_dragarea">
                        <em class="file_txt">마우스로 드래그해서 첨부파일을 추가해 주세요.</em>
                    </div>
                    </td>
                    </tr>
                </tbody>
                </table>
                <div class="btn_area">
                <button type="button" class="btn blue" onClick={goInsert}>등록</button>
                <button type="button" class="btn gray" onClick={goTables}>목록</button>
                </div>
        </div>
    )
}
export default Form;